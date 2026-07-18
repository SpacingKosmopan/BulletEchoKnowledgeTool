// *****
function getRandomIntInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}
// *****

const mapFragments = [
  // 1
  {
    mapname: "Railway Station",
    mapsrc: "./images/railway_station.webp",
    fragmentsrc: "./images/30.webp",
  },
  {
    mapname: "Sawmill",
    mapsrc: "./images/sawmill.webp",
    fragmentsrc: "./images/31.webp",
  },
  {
    mapname: "Asument Park",
    mapsrc: "./images/asument_park.webp",
    fragmentsrc: "./images/32.webp",
  },
  // 4
  {
    mapname: "Sewerage",
    mapsrc: "./images/sewerage.webp",
    fragmentsrc: "./images/33.webp",
  },
  {
    mapname: "Villa",
    mapsrc: "./images/villa.webp",
    fragmentsrc: "./images/34.webp",
  },
  {
    mapname: "Forgotten Bazar",
    mapsrc: "./images/forgotten_bazar.webp",
    fragmentsrc: "./images/35.webp",
  },
  // 7
  {
    mapname: "Asylum",
    mapsrc: "./images/asylum.webp",
    fragmentsrc: "./images/36.webp",
  },
  {
    mapname: "City",
    mapsrc: "./images/city.webp",
    fragmentsrc: "./images/37.webp",
  },
  {
    mapname: "Road Motel",
    mapsrc: "./images/road_motel.webp",
    fragmentsrc: "./images/38.webp",
  },
  {
    mapname: "Hotel",
    mapsrc: "./images/hotel.webp",
    fragmentsrc: "./images/39.webp",
  },
  {
    mapname: "Secret Floor",
    mapsrc: "./images/secret_floor.webp",
    fragmentsrc: "./images/40.webp",
  },
];

let currentFragment = null;
let mapNumber = 0;
const fragmentImage = document.querySelector("#fragment-image");
const startBtn = document.querySelector("#start-btn");
const answerBtn = document.querySelector("#answer-btn");
const answerText = document.querySelector("#answer-text");

let gamestate = {
  roundNumber: 0,
  maxRounds: 10,
  alreadyShownQuestions: [],
  currentQuestion: null,
};

startBtn.addEventListener("click", getRandomFragment);

const roundNumberText = document.querySelector("#round-number");
function getRandomFragment() {
  gamestate.roundNumber++;
  if (gamestate.roundNumber === gamestate.maxRounds + 1) {
    fragmentImage.classList.add("hidden");
    answerBtn.classList.add("hidden");

    answerText.innerHTML = `Thank you for playing!`;
    startBtn.innerHTML = `<p>Finish</p>`;
    return;
  } else if (gamestate.roundNumber === gamestate.maxRounds + 2) {
    gamestate = {
      roundNumber: 0,
      maxRounds: 10,
      alreadyShownQuestions: [],
      currentQuestion: null,
    };

    roundNumberText.innerHTML = `Round <b>X</b> / ?`;
    answerText.innerHTML = `This map is called ???`;
    startBtn.innerHTML = `<p>Start</p>`;
    return;
  }

  roundNumberText.innerHTML = `Round <b>${gamestate.roundNumber}</b> / ${gamestate.maxRounds}`;

  if (gamestate.alreadyShownQuestions.length === mapFragments.length) {
    alert("Could not find any more questions");
    return;
  }

  let questionNumber = -1;
  do {
    questionNumber = getRandomIntInclusive(0, mapFragments.length - 1);
  } while (gamestate.alreadyShownQuestions.includes(questionNumber));

  currentFragment = mapFragments[questionNumber];
  gamestate.alreadyShownQuestions.push(questionNumber);
  fragmentImage.src = currentFragment.fragmentsrc;

  fragmentImage.classList.remove("hidden");
  answerBtn.classList.remove("hidden");

  answerText.innerHTML = `This map is called ???`;
  answerText.classList.remove("hidden");

  startBtn.innerHTML = `<p>Next</p>`;
  startBtn.classList.add("hidden");
}

answerBtn.addEventListener("click", () => {
  answerText.innerHTML = `This map is called <u>${currentFragment.mapname}</u>`;
  fragmentImage.src = currentFragment.mapsrc;
  startBtn.classList.remove("hidden");
  answerBtn.classList.add("hidden");
});

// * MAPS LIST ASIDE * //
const mapsList = {
  BattleRoyale: [
    "Casino",
    "Bank",
    "Village",
    "Police Station",
    "Railway Station",
    "Hotel",
    "City",
  ],
  SquadVsSquad: ["Sewerage", "Amusement Park", "Dungeon", "Factory"],
  KingOfTheHill: ["Asylum", "Hospital", "Circus", "Forgotten Bazar"],
};

const mapsListDiv = document.querySelector("#maps-list");

let htmlContent = "<p style='margin-left:15px;'><u>Battle Royale</u></p>";
htmlContent += "<ul>";
mapsList.BattleRoyale.forEach((map) => {
  htmlContent += `<li>${map}</li>`;
});
htmlContent += "</ul>";

htmlContent += "<p style='margin-left:15px;'><u>Squad vs Squad</u></p>";
htmlContent += "<ul>";
mapsList.SquadVsSquad.forEach((map) => {
  htmlContent += `<li>${map}</li>`;
});
htmlContent += "</ul>";

htmlContent += "<p style='margin-left:15px;'><u>King of the Hill</u></p>";
htmlContent += "<ul>";
mapsList.KingOfTheHill.forEach((map) => {
  htmlContent += `<li>${map}</li>`;
});
htmlContent += "</ul>";

mapsListDiv.innerHTML = htmlContent;
