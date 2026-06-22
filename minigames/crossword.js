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
        "The only hero, who can shoot without anything triggering the red cone",
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
];

// * GAME MECHANICS * //

const cellToWordsMap = {};

let currentWordIndex = null;

wordsData[0].forEach((wordObj, index) => {
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
const gridData = crosswords[0];

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
  const wordObj = wordsData[0][currentWordIndex];

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

  const wordObj = wordsData[0][currentWordIndex];
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
