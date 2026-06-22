let gamestate = {
  roundNumber: 0,
  maxRounds: 10,
  alreadyShownQuestions: [],
  currentQuestion: null,
};

// *****
function getRandomIntInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}
// *****

const roundNumberText = document.querySelector("#round-number");
const answerText = document.querySelector("#answer-text");
const questionContent = document.querySelector("#question-content");
const questionRegular = document.querySelector("#question-regular");
const answerContent = document.querySelector("#answer-content");

(() => {
  roundNumberText.innerHTML = `Round <b>${gamestate.roundNumber < 1 ? "X" : gamestate.roundNumber}</b> / ${gamestate.maxRounds}`;
})();

// * AUDIO PLAYER * //
const audio = document.getElementById("my-audio");
const playPauseBtn = document.getElementById("btn-play-pause");
const stopBtn = document.getElementById("btn-stop");
const volumeSlider = document.getElementById("volume-slider");
const timeDisplay = document.getElementById("time-display");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.textContent = "Play";
});

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

audio.addEventListener("timeupdate", () => {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60)
    .toString()
    .padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}`;
});

audio.addEventListener("ended", () => {
  playPauseBtn.textContent = "Play";
  audio.currentTime = 0;
});

// * START GAME LOGIC * //

const startGameBtn = document.querySelector("#start-game-btn");
const nextQuestionBtn = document.querySelector("#next-question-btn");
const showAnswerBtn = document.querySelector("#show-answer-btn");

startGameBtn.addEventListener("click", function () {
  gamestate.alreadyShownQuestions = [];
  gamestate.roundNumber = 0;
  nextRound(1);
  this.classList.add("hidden");
  nextQuestionBtn.classList.remove("hidden");
  showAnswerBtn.classList.remove("hidden");
  answerContent.classList.remove("hidden");
});
nextQuestionBtn.addEventListener("click", nextRound);
showAnswerBtn.addEventListener("click", () => {
  if (gamestate.currentQuestion.type === QUESTIONS_TYPES.SHADOW) {
    answerContent.innerHTML = `<p id="answer-text">This is <u style="color: #7070ff;">${gamestate.currentQuestion.answer}</u></p>
    <img src="${gamestate.currentQuestion.src}" style="height:300px; display:inline;" />`;
    questionRegular.innerHTML = ``;
    return;
  }
  answerContent.innerHTML = `<p id="answer-text">This is <u style="color: #7070ff;">${gamestate.currentQuestion.answer}</u></p>`;
});

// * QUESTIONS GENERATING * //
function nextRound(newRoundNumber = -1) {
  if (gamestate.roundNumber === gamestate.maxRounds) {
    finishGame();
    return;
  }
  answerContent.innerHTML = `<p id="answer-text">This is ???</p>`;
  questionRegular.innerHTML = ``;

  if (gamestate.alreadyShownQuestions.length === questions.length) {
    alert("Could not find any more questions");
    return;
  }

  if (newRoundNumber >= 0 && newRoundNumber <= gamestate.maxRounds) {
    gamestate.roundNumber = newRoundNumber;
    roundNumberText.innerHTML = `Round <b>${gamestate.roundNumber}</b> / ${gamestate.maxRounds}`;
  } else if (gamestate.roundNumber < gamestate.maxRounds) {
    gamestate.roundNumber++;
    roundNumberText.innerHTML = `Round <b>${gamestate.roundNumber}</b> / ${gamestate.maxRounds}`;
  } else return;

  // generating question

  let questionNumber = -1;
  do {
    questionNumber = getRandomIntInclusive(0, questions.length - 1);
  } while (gamestate.alreadyShownQuestions.includes(questionNumber));

  gamestate.alreadyShownQuestions.push(questionNumber);

  console.log(`Generated question: ${questionNumber}`);
  gamestate.currentQuestion = questions[questionNumber];

  audioPlayerDiv.classList.add("hidden");
  questionRegular.classList.add("hidden");

  if (gamestate.currentQuestion.type === QUESTIONS_TYPES.AUDIO) {
    showAudioQuestion(gamestate.currentQuestion);
  }
  if (gamestate.currentQuestion.type === QUESTIONS_TYPES.EMOJI) {
    showTextQuestion(gamestate.currentQuestion);
  }
  if (
    gamestate.currentQuestion.type === QUESTIONS_TYPES.GEAR ||
    gamestate.currentQuestion.type === QUESTIONS_TYPES.ICON
  ) {
    showImageQuestion(gamestate.currentQuestion);
  }
  if (gamestate.currentQuestion.type === QUESTIONS_TYPES.SHADOW) {
    showShadowQuestion(gamestate.currentQuestion);
  }
}

function finishGame() {
  answerContent.innerHTML = `<p id="answer-text">Thank you for playing!</p>`;
  questionRegular.innerHTML = ``;

  nextQuestionBtn.classList.add("hidden");
  showAnswerBtn.classList.add("hidden");
  startGameBtn.classList.remove("hidden");
}

const audioPlayerDiv = document.querySelector("#audio-player");
function showAudioQuestion(question) {
  audio.src = question.src;
  audioPlayerDiv.classList.remove("hidden");
}

function showTextQuestion(question) {
  questionRegular.innerHTML = `<p>${question.src}</p>`;
  questionRegular.classList.remove("hidden");
}

function showImageQuestion(question) {
  questionRegular.innerHTML = `<img src="${question.src}" alt="${question.src}" />`;
  questionRegular.classList.remove("hidden");
}

function showShadowQuestion(question) {
  questionRegular.innerHTML = `<img src="${question.src}" alt="${question.src}" style="filter:brightness(0); height:300px; display:inline;" />`;
  questionRegular.classList.remove("hidden");
}

// * GAME MECHANICS * //
const QUESTIONS_TYPES = {
  AUDIO: "Audio",
  GEAR: "Gear",
  SHADOW: "Shadow",
  ICON: "Icon",
  EMOJI: "Emoji",
};

const questions = [
  //* AUDIOS
  {
    type: QUESTIONS_TYPES.AUDIO,
    src: "sounds/error.mp3",
    answer: "error",
  },
  //* EMOJIS
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🕶🔥🦟",
    answer: "Firefly",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🛡️🤖⚡",
    answer: "Blot",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🏹🍃😼",
    answer: "Lynx",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🎤💨👢",
    answer: "Mirage",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🍃💀🎯",
    answer: "Slayer",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🐦👁️📡",
    answer: "Raven",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🎒🚀🩹",
    answer: "Doc",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🧲⚡🙅‍♀️",
    answer: "Tess",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🐂🛡️💥",
    answer: "Ramsay",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🚀🪂🐲",
    answer: "Dragoon",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "🦘🤠🔫",
    answer: "Arnie",
  },
  {
    type: QUESTIONS_TYPES.EMOJI,
    src: "✨💥🪓",
    answer: "Sparkle",
  },
  //* GEARS
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/1.png",
    answer: "Arnie",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/15.png",
    answer: "Hurricane",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/16.png",
    answer: "Ghost",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/17.png",
    answer: "Stalker",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/18.png",
    answer: "Leviathan",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/19.png",
    answer: "Sparkle",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/20.png",
    answer: "Firefly",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/21.png",
    answer: "Angel",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/22.png",
    answer: "Bertha",
  },
  {
    type: QUESTIONS_TYPES.GEAR,
    src: "./images/23.png",
    answer: "Smog",
  },
  //* ICONS
  {
    type: QUESTIONS_TYPES.ICON,
    src: "./images/3.png",
    answer: "Slayer",
  },
  {
    type: QUESTIONS_TYPES.ICON,
    src: "./images/4.png",
    answer: "Cyclops",
  },
  {
    type: QUESTIONS_TYPES.ICON,
    src: "./images/5.png",
    answer: "Twinkle",
  },
  {
    type: QUESTIONS_TYPES.ICON,
    src: "./images/9.png",
    answer: "Dragoon",
  },
  {
    type: QUESTIONS_TYPES.ICON,
    src: "./images/10.png",
    answer: "Mirage",
  },
  {
    type: QUESTIONS_TYPES.ICON,
    src: "./images/11.png",
    answer: "Hurricane",
  },
  //* SHADOWS
  {
    type: QUESTIONS_TYPES.SHADOW,
    src: "./images/6.png",
    answer: "Slayer",
  },
  {
    type: QUESTIONS_TYPES.SHADOW,
    src: "./images/7.png",
    answer: "Stalker",
  },
  {
    type: QUESTIONS_TYPES.SHADOW,
    src: "./images/8.png",
    answer: "Scratch",
  },
  {
    type: QUESTIONS_TYPES.SHADOW,
    src: "./images/12.png",
    answer: "Satoshi",
  },
  {
    type: QUESTIONS_TYPES.SHADOW,
    src: "./images/13.png",
    answer: "Raven",
  },
  {
    type: QUESTIONS_TYPES.SHADOW,
    src: "./images/14.png",
    answer: "Lynx",
  },
];
