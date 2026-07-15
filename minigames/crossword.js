// *****
function getRandomIntInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}
// *****

/**
 * Array of crosswords
 * Crossword is an array of rows
 * Row is an array of cells
 */
const crosswords = [
  //* Crossword 1
  [
    [" ", "s", "t", "a", "l", "k", "e", "r", " ", " ", "b", " ", " "],
    [" ", "h", " ", "f", "o", "r", "c", "e", "f", "i", "e", "l", "d"],
    [" ", "a", "c", " ", " ", " ", " ", "d", " ", " ", "r", " ", " "],
    [" ", "d", "o", " ", " ", " ", " ", "z", " ", " ", "t", " ", " "],
    ["c", "o", "i", "n", "s", " ", " ", "o", " ", " ", "h", " ", " "],
    [" ", "w", "l", " ", "h", " ", " ", "n", " ", " ", "a", " ", " "],
    [" ", "s", "s", " ", "a", " ", " ", "e", "t", " ", " ", " ", " "],
    [" ", "t", " ", " ", "d", " ", " ", " ", "e", " ", " ", " ", " "],
    [" ", "e", " ", "c", "o", "m", "p", "o", "s", "i", "t", "e", " "],
    [" ", "p", " ", " ", "w", " ", " ", " ", "s", " ", " ", " ", " "],
  ],
  //* Crossword 2
  [
    ["d", "e", "a", "t", "h", "m", "a", "t", "c", "h", " ", " ", " "],
    ["r", " ", " ", "w", " ", " ", "r", " ", " ", " ", " ", " ", " "],
    ["a", " ", "d", "i", "v", "i", "n", "e", " ", " ", " ", "g", " "],
    ["g", " ", " ", "n", " ", " ", "i", " ", " ", " ", " ", "u", " "],
    ["o", " ", " ", "k", " ", "z", "e", "p", "t", "o", "l", "a", "b"],
    ["o", " ", " ", "l", " ", " ", " ", " ", "r", " ", " ", "r", " "],
    ["n", " ", " ", "e", " ", " ", " ", " ", "o", " ", " ", "d", " "],
    [" ", " ", " ", " ", " ", " ", "b", "l", "o", "t", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "p", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "f", "i", "r", "e", "f", "l", "y", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "r", " ", " ", " ", " "],
  ],
  //* Crossword 3
  [
    [" ", "b", " ", " ", " ", " ", " ", " ", "f", " ", " ", "d", " "],
    ["m", "a", "t", "c", "h", "b", "o", "x", "e", "s", " ", "r", " "],
    [" ", "t", " ", " ", " ", " ", " ", " ", "s", " ", " ", "o", " "],
    [" ", "t", " ", "l", "e", "v", "i", "a", "t", "h", "a", "n", " "],
    [" ", "e", " ", " ", " ", " ", "u", "n", "i", "q", "u", "e", " "],
    ["g", "r", "a", "v", "i", "e", "l", " ", "v", " ", " ", " ", " "],
    [" ", "i", " ", " ", " ", " ", "s", "p", "a", "r", "k", "l", "e"],
    [" ", "e", " ", "m", "a", "d", "b", "u", "l", "l", "e", "t", "s"],
    [" ", "s", "a", "t", "o", "s", "h", "i", " ", " ", " ", " ", " "],
  ],
];
/**
 * Array of crosswords
 * Each crossword has a set of words
 * Each word has query, direction and starting position
 */
const wordsData = [
  //* Crossword 1
  [
    // 1
    {
      word: "ShadowStep",
      query:
        "Name of ability: hero dashes in a distance of X in the direction of their movement",
      direction: "vertical",
      startPos: {
        x: 1,
        y: 0,
      },
    },
    // 2
    {
      word: "Stalker",
      query:
        "Name of hero, whose passive says: on killing an enemy: up to -90% to reload time for the hero and allies",
      direction: "horizontal",
      startPos: {
        x: 1,
        y: 0,
      },
    },
    // 3
    {
      word: "Coins",
      query: "Name of resource used to upgrade heroes",
      direction: "horizontal",
      startPos: {
        x: 0,
        y: 4,
      },
    },
    // 4
    {
      word: "Shadow",
      query:
        "Name of drone, which gives armor per second to hero standing close to it",
      direction: "vertical",
      startPos: {
        x: 4,
        y: 4,
      },
    },
    // 5
    {
      word: "Coils",
      query: "Name of resource used to upgrade weapon mods",
      direction: "vertical",
      startPos: {
        x: 2,
        y: 2,
      },
    },
    // 6
    {
      word: "Composite",
      query: "Name of Lynx's personal set",
      direction: "horizontal",
      startPos: {
        x: 3,
        y: 8,
      },
    },
    // 7
    {
      word: "RedZone",
      query:
        "Name of fire circle, that deals damage and gets smaller over time",
      direction: "vertical",
      startPos: {
        x: 7,
        y: 0,
      },
    },
    // 8
    {
      word: "ForceField",
      query: "Name of Satoshi's and Blot's main abilities",
      direction: "horizontal",
      startPos: {
        x: 3,
        y: 1,
      },
    },
    // 9
    {
      word: "Bertha",
      query:
        "The only hero, who can shoot without anything triggering it in the red cone",
      direction: "vertical",
      startPos: {
        x: 10,
        y: 0,
      },
    },
    // 10
    {
      word: "Tess",
      query: "Second hero introduced in Star Pass (third season)",
      direction: "vertical",
      startPos: {
        x: 8,
        y: 6,
      },
    },
  ],
  //* Crossword 2
  [
    // 1
    {
      word: "Deathmatch",
      query: "Name of the mode where everyone has four lives",
      direction: "horizontal",
      startPos: {
        x: 0,
        y: 0,
      },
    },
    // 2
    {
      word: "Twinkle",
      query: "The most chaotic scout in the game",
      direction: "vertical",
      startPos: {
        x: 3,
        y: 0,
      },
    },
    // 3
    {
      word: "Dragoon",
      query: "A heavy tank hero who can jump over obstacles",
      direction: "vertical",
      startPos: {
        x: 0,
        y: 0,
      },
    },
    // 4
    {
      word: "Divine",
      query: "Name of the highest tier heroes and gears can be",
      direction: "horizontal",
      startPos: {
        x: 2,
        y: 2,
      },
    },
    // 5
    {
      word: "Arnie",
      query: "The best hunter of wolves in the game",
      direction: "vertical",
      startPos: {
        x: 6,
        y: 0,
      },
    },
    // 6
    {
      word: "ZeptoLab",
      query: "Name of the Bullet Echo developing studio",
      direction: "horizontal",
      startPos: {
        x: 5,
        y: 4,
      },
    },
    // 7
    {
      word: "Trooper",
      query: "Name of Satoshi's class",
      direction: "vertical",
      startPos: {
        x: 8,
        y: 4,
      },
    },
    // 8
    {
      word: "Guard",
      query: "Name of the red drone",
      direction: "vertical",
      startPos: {
        x: 11,
        y: 2,
      },
    },
    // 9
    {
      word: "Firefly",
      query: "Name of hero with the highest fire rate among snipers",
      direction: "horizontal",
      startPos: {
        x: 5,
        y: 9,
      },
    },

    // 10
    {
      word: "Blot",
      query: "It's real name is B-107",
      direction: "horizontal",
      startPos: {
        x: 6,
        y: 7,
      },
    },
  ],
  //* Crossword 3
  [
    // 1
    {
      word: "Matchboxes",
      query: "Name of resource you collect in Sabotage mode",
      direction: "horizontal",
      startPos: {
        x: 0,
        y: 1,
      },
    },
    // 2
    {
      word: "Festival",
      query: "Name of event that includes 12 skins to collect, one per day",
      direction: "vertical",
      startPos: {
        x: 8,
        y: 0,
      },
    },
    // 3
    {
      word: "Batteries",
      query:
        "Name of resource used to get better rewards in Team Deathmatch's Infinity Roulette",
      direction: "vertical",
      startPos: {
        x: 1,
        y: 0,
      },
    },
    // 4
    {
      word: "Satoshi",
      query: "Name of trooper with Force Field",
      direction: "horizontal",
      startPos: {
        x: 1,
        y: 8,
      },
    },
    // 5
    {
      word: "Unique",
      query: "Name of the rarest rarity tier of skins",
      direction: "horizontal",
      startPos: {
        x: 6,
        y: 4,
      },
    },
    // 6
    {
      word: "MadBullets",
      query: "Name of weekly giveaway on official Discord server",
      direction: "horizontal",
      startPos: {
        x: 3,
        y: 7,
      },
    },
    // 7
    {
      word: "Sparkle",
      query: "Name of enforcer with the best healing",
      direction: "horizontal",
      startPos: {
        x: 6,
        y: 6,
      },
    },
    // 8
    {
      word: "Leviathan",
      query:
        "Name of hero with the highest amount of bullets in primary weapon's magazine",
      direction: "horizontal",
      startPos: {
        x: 3,
        y: 3,
      },
    },
    // 9
    {
      word: "Graviel",
      query: "Name of hero with the longest hair",
      direction: "horizontal",
      startPos: {
        x: 0,
        y: 5,
      },
    },
    // 10
    {
      word: "Drone",
      query: "Can revive you and is not a hero",
      direction: "vertical",
      startPos: {
        x: 11,
        y: 0,
      },
    },
  ],
];

// * GAME MECHANICS * //

const cellToWordsMap = {};
let crosswordId = getRandomIntInclusive(0, wordsData.length - 1);
let currentWordIndex = null;

wordsData[crosswordId].forEach((wordObj, index) => {
  let { x, y } = wordObj.startPos;
  const len = wordObj.word.length;

  for (let i = 0; i < len; i++) {
    const currentX = wordObj.direction === "horizontal" ? x + i : x;
    const currentY = wordObj.direction === "vertical" ? y + i : y;
    const key = `${currentX},${currentY}`;

    if (!cellToWordsMap[key]) {
      cellToWordsMap[key] = [];
    }
    cellToWordsMap[key].push(index);
  }
});

const container = document.getElementById("crossword-container");
const questionBox = document.getElementById("question-box");
//TODO: set random
const gridData = crosswords[crosswordId];

gridData.forEach((row, y) => {
  row.forEach((letter, x) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (letter === " ") {
      cell.classList.add("empty");
    } else {
      cell.classList.add("word-cell");

      const letterSpan = document.createElement("span");
      letterSpan.classList.add("letter");
      letterSpan.textContent = letter;
      cell.appendChild(letterSpan);

      cell.dataset.x = x;
      cell.dataset.y = y;

      cell.addEventListener("click", () => handleCellClick(x, y));
    }
    container.appendChild(cell);
  });
});

function handleCellClick(x, y) {
  const key = `${x},${y}`;
  const wordIndexes = cellToWordsMap[key];

  if (!wordIndexes || wordIndexes.length === 0) return;

  currentWordIndex = wordIndexes[0];
  //TODO: set random
  const wordObj = wordsData[crosswordId][currentWordIndex];

  questionBox.textContent = wordObj.query;

  document
    .querySelectorAll(".cell")
    .forEach((c) => c.classList.remove("highlighted"));

  let startX = wordObj.startPos.x;
  let startY = wordObj.startPos.y;

  for (let i = 0; i < wordObj.word.length; i++) {
    const targetX = wordObj.direction === "horizontal" ? startX + i : startX;
    const targetY = wordObj.direction === "vertical" ? startY + i : startY;

    const targetCell = document.querySelector(
      `.cell[data-x="${targetX}"][data-y="${targetY}"]`,
    );
    if (targetCell) {
      targetCell.classList.add("highlighted");
    }
  }
}

const viewResultsBtn = document.getElementById("view-results-btn");

viewResultsBtn.addEventListener("click", () => {
  if (currentWordIndex === null) {
    return;
  }

  //TODO: set random
  const wordObj = wordsData[crosswordId][currentWordIndex];
  let startX = wordObj.startPos.x;
  let startY = wordObj.startPos.y;

  for (let i = 0; i < wordObj.word.length; i++) {
    const targetX = wordObj.direction === "horizontal" ? startX + i : startX;
    const targetY = wordObj.direction === "vertical" ? startY + i : startY;

    const targetCell = document.querySelector(
      `.cell[data-x="${targetX}"][data-y="${targetY}"]`,
    );
    if (targetCell) {
      targetCell.classList.add("revealed");
    }
  }
});
