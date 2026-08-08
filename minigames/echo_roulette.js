// *****
function getRandomIntInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}
// *****

const TIERS = {
  COMMON: {
    name: "Common",
    currencyRange: { min: 1, max: 30 },
    dropRate: [60, 50, 40, 30],
  },
};

const UPGRADES = {
  foregrip: {
    name: "Foregrip",
    description: "Increases chance for rarer cards",
    baseCost: 300,
  },
  explosiveRounds: {
    name: "Explosive Rounds",
    description: "Increases cards cost",
    baseCost: 300,
    modifiers: [1, 1.1, 1.5, 2],
  },
  armorEnhancer: {
    name: "Armor Enhancer",
    description: "Increases chance for card to be higher tier",
    baseCost: 300,
    modifiers: [0, 0.03, 0.08, 0.15],
  },
};

const UPGRADES_COST_SCALING = [1, 2, 4, 10];

let gameState = { upgrades: { foregrip: 0, explosiveRounds: 0 } };

const POSSIBLE_CARDS = [
  {
    name: "Stalker",
    image: "../skins/stalker.png",
    baseTier: TIERS.COMMON,
  },
];

const card = document.querySelector("#hero-roulette-card");
let cardOpenState = 0;
const MAX_STAGES = 4;

setTimeout(() => {
  card.classList.add("ready");
}, 1000);

card.addEventListener("click", function () {
  if (cardOpenState >= MAX_STAGES) {
    return;
  }

  if (cardOpenState === 0) {
    this.classList.remove("ready");
  } else {
    this.classList.remove(`stage-${cardOpenState}`);
  }

  cardOpenState++;

  this.classList.add(`stage-${cardOpenState}`);
});
