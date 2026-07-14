const urlParams = new URLSearchParams(window.location.search);
const calculatorType = urlParams.get("type");

const DOM = {
  resultPanel: document.querySelector("#results-panel"),
  infoTipPanel: document.querySelector("#info-tip-panel"),
  damageToEnemyPanel: document.querySelector("#damage-to-enemy-panel"),
  enemyArmorResistancePanel: document.querySelector(
    "#enemy-armor-resistance-panel",
  ),
  gearUpgradeCostPanel: document.querySelector("#gear-upgrade-cost-panel"),
  modUpgradeCostPanel: document.querySelector("#mod-upgrade-cost-panel"),
  heroUpgradeCostPanel: document.querySelector("#hero-upgrade-cost-panel"),
};

if (calculatorType === "damage_to_enemy") {
  showPanel(DOM.damageToEnemyPanel);
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;
} else if (calculatorType === "armor_resistance") {
  showPanel(DOM.enemyArmorResistancePanel);
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;
} else if (calculatorType === "gear_upgrade") {
  showPanel(DOM.gearUpgradeCostPanel);
  DOM.resultPanel.innerHTML = `<p>Select <u>base and final levels</u> and <u>gear type</u> to calculate the amount of <u>nuts</u> and <u>gear copies</u> you need to upgrade</p>`;
  DOM.infoTipPanel.innerHTML = `<p>
    Remember to wait until "Gear Rush" discount begins, so you can
    save up to <u>10% on resources</u>! The discount appears every 6
    weeks, and along with it - leaderboard and special road with
    rewards!
  </p>
  <img
    src="./images/gear_rush.png"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_leaderboard.jpg"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_road.jpg"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  /> `;
} else if (calculatorType === "mod_upgrade") {
  showPanel(DOM.modUpgradeCostPanel);
  DOM.resultPanel.innerHTML = `<p>Click desired mod to check how many <u>coils</u> and which <u>previous tiers</u> you need to get this upgrade</p>`;
} else if (calculatorType === "hero_upgrade") {
  DOM.resultPanel.innerHTML =
    "<p>Select <u>level</u> and <u>tier</u> to calculate required <u>hero cards</u> and <u>coins</u></p>";
  DOM.infoTipPanel.innerHTML = `<p>
    Remember to wait until "Hero Rush" discount begins, so you can
    save up to <u>20% on resources</u>! The discount appears every 6
    weeks, and along with it - leaderboard and special road with
    rewards!
  </p>
  <img
    src="./images/hero_rush.png"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_leaderboard.jpg"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_road.jpg"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  /> `;
  showPanel(DOM.heroUpgradeCostPanel);
} else if (calculatorType === "drone_upgrade") {
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;
  DOM.infoTipPanel.innerHTML = `<p>
    Remember to wait until "Drone Rush" discount begins, so you can
    save up to <u>20% on resources</u>! The discount appears every 6
    weeks, and along with it - leaderboard and special road with
    rewards!
  </p>
  <img
    src="./images/drone_update.png"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_leaderboard.jpg"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_road.jpg"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />`;
} else
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;

function showPanel(panel) {
  panel.classList.remove("hidden");
}

// * FORMS * //
const DOMforms = {
  dmgToEnemy: {
    form: document.querySelector("#dmg-en-input-form"),
  },
  enemyArmorResistance: {
    form: document.querySelector("#en-armor-resistance-input-form"),
  },
  gearUpgradeCost: {
    form: document.querySelector("#gear-upgrade-cost-form"),
  },
  heroUpgradeCost: {
    form: document.querySelector("#hero-upgrade-cost-form"),
  },
};

const gearUpgradeCost = {
  common: [
    // from common
    { nuts: 100, copies: 4 },
    // from rare
    { nuts: 200, copies: 8 },
    // from epic
    { nuts: 450, copies: 18 },
    // from legendary
    { nuts: 1250, copies: 50 },
    // from mythic
    { nuts: 3500, copies: 140 },
    // from supreme
    { nuts: 6000, copies: 240 },
    // from ultimate
    { nuts: 9000, copies: 350 },
    // from celestial
    { nuts: 15000, copies: 470 },
    // from stellar
    { nuts: 24000, copies: 590 },
    // from immortal
    { nuts: 36000, copies: 790 },
  ],
  weaponry: [
    // from common
    { nuts: 200, copies: 2 },
    // from rare
    { nuts: 900, copies: 9 },
    // from epic
    { nuts: 1900, copies: 19 },
    // from legendary
    { nuts: 4000, copies: 40 },
    // from mythic
    { nuts: 9500, copies: 95 },
    // from supreme
    { nuts: 15500, copies: 150 },
    // from ultimate
    { nuts: 23000, copies: 210 },
    // from celestial
    { nuts: 32000, copies: 285 },
    // from stellar
    { nuts: 43000, copies: 370 },
    // from immortal
    { nuts: 59000, copies: 470 },
  ],
  personal: [
    // from common
    { nuts: 500, copies: 2 },
    // from rare
    { nuts: 1000, copies: 5 },
    // from epic
    { nuts: 2000, copies: 10 },
    // from legendary
    { nuts: 4500, copies: 20 },
    // from mythic
    { nuts: 9000, copies: 30 },
    // from supreme
    { nuts: 14000, copies: 40 },
    // from ultimate
    { nuts: 19000, copies: 45 },
    // from celestial
    { nuts: 29000, copies: 50 },
    // from stellar
    { nuts: 45000, copies: 55 },
    // from immortal
    { nuts: 69000, copies: 60 },
  ],
};
const tierNames = {
  COMMON: 0,
  RARE: 1,
  EPIC: 2,
  LEGENDARY: 3,
  MYTHIC: 4,
  SUPREME: 5,
  ULTIMATE: 6,
  CELESTIAL: 7,
  STELLAR: 8,
  IMMORTAL: 9,
  DIVINE: 10,
};
const tierValues = Object.fromEntries(
  Object.entries(tierNames).map(([key, value]) => [value, key]),
);
/**
 * Use: tierColors[tierNames.COMMON]
 */
const tierColors = [
  "#7baba8",
  "#6cde38",
  "#1998fd",
  "#ffc006",
  "#e97012",
  "#f6412c",
  "#731fff",
  "#0132d1",
  "#cd24eb",
  "#7b140d",
  "#262641",
  "#fec901", // divine gold id=11
];

// * HERO UPGRADE COST * //

const heroUpgradeCost = [
  { finalLevel: 2, cards: 0, coins: 200, newTier: tierNames.COMMON },
  { finalLevel: 3, cards: 0, coins: 300, newTier: tierNames.COMMON },
  { finalLevel: 4, cards: 0, coins: 400, newTier: tierNames.COMMON },
  { finalLevel: 5, cards: 0, coins: 500, newTier: tierNames.COMMON },
  { finalLevel: 6, cards: 0, coins: 600, newTier: tierNames.COMMON },
  { finalLevel: 7, cards: 0, coins: 700, newTier: tierNames.COMMON },
  { finalLevel: 8, cards: 0, coins: 800, newTier: tierNames.COMMON },
  { finalLevel: 9, cards: 0, coins: 900, newTier: tierNames.COMMON },
  { finalLevel: 10, cards: 0, coins: 1000, newTier: tierNames.COMMON },
  {
    finalLevel: 10,
    cards: 35,
    coins: 750,
    newTier: tierNames.RARE,
    tierBoost: true,
  },
  { finalLevel: 11, cards: 0, coins: 1100, newTier: tierNames.RARE },
  { finalLevel: 12, cards: 0, coins: 1200, newTier: tierNames.RARE },
  { finalLevel: 13, cards: 0, coins: 1300, newTier: tierNames.RARE },
  { finalLevel: 14, cards: 0, coins: 1400, newTier: tierNames.RARE },
  { finalLevel: 15, cards: 0, coins: 1500, newTier: tierNames.RARE },
  { finalLevel: 16, cards: 0, coins: 1600, newTier: tierNames.RARE },
  { finalLevel: 17, cards: 0, coins: 1700, newTier: tierNames.RARE },
  { finalLevel: 18, cards: 0, coins: 1800, newTier: tierNames.RARE },
  { finalLevel: 19, cards: 0, coins: 1900, newTier: tierNames.RARE },
  { finalLevel: 20, cards: 0, coins: 2000, newTier: tierNames.RARE },
  {
    finalLevel: 20,
    cards: 65,
    coins: 1500,
    newTier: tierNames.EPIC,
    tierBoost: true,
  },
  { finalLevel: 21, cards: 0, coins: 2100, newTier: tierNames.EPIC },
  { finalLevel: 22, cards: 0, coins: 2200, newTier: tierNames.EPIC },
  { finalLevel: 23, cards: 0, coins: 2300, newTier: tierNames.EPIC },
  { finalLevel: 24, cards: 0, coins: 2400, newTier: tierNames.EPIC },
  { finalLevel: 25, cards: 0, coins: 2500, newTier: tierNames.EPIC },
  { finalLevel: 26, cards: 0, coins: 2600, newTier: tierNames.EPIC },
  { finalLevel: 27, cards: 0, coins: 2700, newTier: tierNames.EPIC },
  { finalLevel: 28, cards: 0, coins: 2800, newTier: tierNames.EPIC },
  { finalLevel: 29, cards: 0, coins: 2900, newTier: tierNames.EPIC },
  { finalLevel: 30, cards: 0, coins: 3000, newTier: tierNames.EPIC },
  {
    finalLevel: 30,
    cards: 100,
    coins: 3000,
    newTier: tierNames.LEGENDARY,
    tierBoost: true,
  },
  { finalLevel: 31, cards: 0, coins: 3100, newTier: tierNames.LEGENDARY },
  { finalLevel: 32, cards: 0, coins: 3200, newTier: tierNames.LEGENDARY },
  { finalLevel: 33, cards: 0, coins: 3300, newTier: tierNames.LEGENDARY },
  { finalLevel: 34, cards: 0, coins: 3400, newTier: tierNames.LEGENDARY },
  { finalLevel: 35, cards: 0, coins: 3500, newTier: tierNames.LEGENDARY },
  { finalLevel: 36, cards: 0, coins: 3600, newTier: tierNames.LEGENDARY },
  { finalLevel: 37, cards: 0, coins: 3700, newTier: tierNames.LEGENDARY },
  { finalLevel: 38, cards: 0, coins: 3800, newTier: tierNames.LEGENDARY },
  { finalLevel: 39, cards: 0, coins: 3900, newTier: tierNames.LEGENDARY },
  { finalLevel: 40, cards: 0, coins: 4000, newTier: tierNames.LEGENDARY },
  {
    finalLevel: 40,
    cards: 140,
    coins: 6000,
    newTier: tierNames.MYTHIC,
    tierBoost: true,
  },
  {
    finalLevel: 41,
    cards: 0,
    coins: 4050,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 42,
    cards: 0,
    coins: 4100,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 43,
    cards: 0,
    coins: 4150,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 44,
    cards: 0,
    coins: 4200,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 45,
    cards: 0,
    coins: 4250,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 46,
    cards: 0,
    coins: 4300,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 47,
    cards: 0,
    coins: 4350,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 48,
    cards: 0,
    coins: 4400,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 49,
    cards: 0,
    coins: 4450,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 50,
    cards: 0,
    coins: 4500,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 50,
    cards: 200,
    coins: 12000,
    newTier: tierNames.SUPREME,
    tierBoost: true,
  },
  {
    finalLevel: 51,
    cards: 0,
    coins: 4550,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 52,
    cards: 0,
    coins: 4600,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 53,
    cards: 0,
    coins: 4650,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 54,
    cards: 0,
    coins: 4700,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 55,
    cards: 0,
    coins: 4750,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 56,
    cards: 0,
    coins: 4800,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 57,
    cards: 0,
    coins: 4850,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 58,
    cards: 0,
    coins: 4900,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 59,
    cards: 0,
    coins: 4950,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 60,
    cards: 0,
    coins: 5000,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 60,
    cards: 300,
    coins: 25000,
    newTier: tierNames.ULTIMATE,
    tierBoost: true,
  },
  {
    finalLevel: 61,
    cards: 5,
    coins: 5300,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 62,
    cards: 13,
    coins: 5600,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 63,
    cards: 18,
    coins: 5900,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 64,
    cards: 23,
    coins: 6200,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 65,
    cards: 27,
    coins: 6550,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 66,
    cards: 30,
    coins: 6900,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 67,
    cards: 33,
    coins: 7300,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 68,
    cards: 36,
    coins: 7700,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 69,
    cards: 38,
    coins: 8100,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 70,
    cards: 41,
    coins: 8550,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 70,
    cards: 360,
    coins: 38000,
    newTier: tierNames.CELESTIAL,
    tierBoost: true,
  },
  {
    finalLevel: 71,
    cards: 43,
    coins: 9000,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 72,
    cards: 46,
    coins: 9500,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 73,
    cards: 48,
    coins: 10000,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 74,
    cards: 50,
    coins: 10550,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 75,
    cards: 53,
    coins: 11150,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 76,
    cards: 55,
    coins: 11750,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 77,
    cards: 57,
    coins: 12400,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 78,
    cards: 59,
    coins: 13100,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 79,
    cards: 61,
    coins: 13800,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 80,
    cards: 63,
    coins: 14550,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 80,
    cards: 420,
    coins: 57000,
    newTier: tierNames.STELLAR,
    tierBoost: true,
  },
  {
    finalLevel: 81,
    cards: 64,
    coins: 14850,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 82,
    cards: 64,
    coins: 15600,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 83,
    cards: 64,
    coins: 16300,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 84,
    cards: 64,
    coins: 17100,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 85,
    cards: 64,
    coins: 17900,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 85,
    cards: 110,
    coins: 82000,
    newTier: tierNames.IMMORTAL,
    tierBoost: true,
  },
  {
    finalLevel: 86,
    cards: 64,
    coins: 18800,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 87,
    cards: 64,
    coins: 19550,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 88,
    cards: 64,
    coins: 20400,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 89,
    cards: 64,
    coins: 21300,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 90,
    cards: 64,
    coins: 22200,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 90,
    cards: 130,
    coins: 107000,
    newTier: tierNames.DIVINE,
    tierBoost: true,
  },
];

function getHeroUpgradeCost(
  currentLevel,
  finalLevel,
  isFinalTierBoost = false,
) {
  if (finalLevel <= currentLevel) return null;
  if (currentLevel <= 0) return null;

  let cost = { cards: 0, coins: 0 };

  // we have level 1, we want 5
  // 1=>2, 2=>3, 3=>4, 4=>5 + possible tier boost
  // that was four iterations + ptb
  for (let i = currentLevel; i < finalLevel; i++) {
    // 1-10
    if (i >= 1 && i <= 10 - 1) {
      cost.coins += (i + 1) * 100;
      if (
        i == 10 - 1 &&
        ((finalLevel == 10 && isFinalTierBoost) || finalLevel > 10)
      ) {
        cost.coins += 750;
        cost.cards += 35;
      }
    }

    // 10-20
    else if (i >= 10 && i <= 20 - 1) {
      cost.coins += (i + 1) * 100;
      if (
        i == 20 - 1 &&
        ((finalLevel == 20 && isFinalTierBoost) || finalLevel > 20)
      ) {
        cost.coins += 1500;
        cost.cards += 65;
      }
    }

    // 20-30
    else if (i >= 20 && i <= 30 - 1) {
      cost.coins += (i + 1) * 100;
      if (
        i == 30 - 1 &&
        ((finalLevel == 30 && isFinalTierBoost) || finalLevel > 30)
      ) {
        cost.coins += 3000;
        cost.cards += 100;
      }
    }

    // 30-40
    else if (i >= 30 && i <= 40 - 1) {
      cost.coins += (i + 1) * 100;
      if (
        i == 40 - 1 &&
        ((finalLevel == 40 && isFinalTierBoost) || finalLevel > 40)
      ) {
        cost.coins += 6000;
        cost.cards += 140;
      }
    }

    // 40-50
    else if (i >= 40 && i <= 50 - 1) {
      // 40=>41 4050coins
      // 41=>42 4100coins
      // 42=>43 4150coins
      cost.coins += 4050 + (i - 40) * 50;
      if (
        i == 50 - 1 &&
        ((finalLevel == 50 && isFinalTierBoost) || finalLevel > 50)
      ) {
        cost.coins += 12000;
        cost.cards += 200;
      }
    }

    // 50-60
    else if (i >= 50 && i <= 60 - 1) {
      cost.coins += 4550 + (i - 50) * 50;
      if (
        i == 60 - 1 &&
        ((finalLevel == 60 && isFinalTierBoost) || finalLevel > 60)
      ) {
        cost.coins += 25000;
        cost.cards += 300;
      }
    }

    // 60-70
    else if (i >= 60 && i <= 70 - 1) {
      // buying level 64
      if (i <= 63) {
        cost.coins += 5300 + (i - 60) * 300;
        if (i == 60) cost.cards += 5;
        else if (i == 61) cost.cards += 13;
        else cost.cards += 13 + (i - 61) * 5;
      }
      // buying level 65
      else if (i == 64) {
        cost.coins += 6550;
        cost.cards += 27;
      }
      // buying levels 66-69
      else if (i >= 65 && i <= 68) {
        cost.coins += 6900 + (i - 65) * 400;
        if (i < 68) cost.cards += 27 + (i - 64) * 3;
        else cost.cards += 38;
      } else if (i == 69) {
        cost.coins += 8550;
        cost.cards += 41;
      }

      if (
        i == 70 - 1 &&
        ((finalLevel == 70 && isFinalTierBoost) || finalLevel > 70)
      ) {
        cost.coins += 38000;
        cost.cards += 360;
      }
    }
  }

  //* I'm done. I'll use regular array.
}

/**
 * Function calculates the cost of upgrading hero
 * @param {number} currentLevel (1-90)
 * @param {number} finalLevel (2-90)
 * @param {boolean} isStartingTierBoost (true | false) default: false - is 10th level common or rare (false-common)
 * @param {boolean} isFinalTierBoost (true | false) default: false - is 10th level common or rare (false-common)
 * @returns \{ cards: number, coins: number \} | null - Object with amount of cards and coins
 */
function getHeroUpgradeCostv2(
  currentLevel,
  finalLevel,
  isStartingTierBoost = false,
  isFinalTierBoost = false,
) {
  if (finalLevel < currentLevel)
    return {
      error: `Wrong levels selection: ${currentLevel}/${finalLevel}`,
    };
  if (currentLevel === finalLevel && isStartingTierBoost && !isFinalTierBoost) {
    return {
      error: `Cannot upgrade backwards on the same level (starting with boost, ending without).`,
    };
  }
  if (currentLevel <= 0 || currentLevel > 90 || finalLevel > 90)
    return { error: `Invalid level number: ${currentLevel}/${finalLevel}` };

  let cost = { cards: 0, coins: 0 };

  // for (1,5) iterations are for [1,2,3,4]
  // for (5,10) iterations are for [5,6,7,8,9]
  // for (5,10,true) iterations are for [5,6,7,8,9,B]
  // for (5,11) iterations are for [5,6,7,8,9,10]
  //
  // for upgrading (1->2): array element [0]
  // for upgrading (5->6): array element [0]
  heroUpgradeCost.forEach((levelUpgradeCost) => {
    // lower levels
    if (levelUpgradeCost.finalLevel < currentLevel) return;

    // possible tier boost at the beggining
    if (levelUpgradeCost.finalLevel === currentLevel) {
      if (levelUpgradeCost.tierBoost) {
        // current level is already boosted tier
        if (isStartingTierBoost) return;
      } else {
        // regular boost at the beginning
        return;
      }
    }

    // higher levels
    if (levelUpgradeCost.finalLevel > finalLevel) return;

    // possible final tier boost
    if (levelUpgradeCost.finalLevel === finalLevel) {
      // we are not doing final tier boost
      if (levelUpgradeCost.tierBoost && !isFinalTierBoost) return;
    }

    cost.cards += levelUpgradeCost.cards;
    cost.coins += levelUpgradeCost.coins;
  });

  return cost;
}

/**
 * Element 0 is upgrading from 1 to 2
 * 18 levels, 17 upgrades
 */
const talentUpgradeCost = [
  { batteries: 40, requiredHeroTier: tierNames.RARE },
  { batteries: 60, requiredHeroTier: tierNames.RARE },
  { batteries: 75, requiredHeroTier: tierNames.RARE },
  { batteries: 100, requiredHeroTier: tierNames.RARE },
  { batteries: 150, requiredHeroTier: tierNames.EPIC },
  { batteries: 200, requiredHeroTier: tierNames.EPIC },
  { batteries: 300, requiredHeroTier: tierNames.EPIC },
  { batteries: 400, requiredHeroTier: tierNames.LEGENDARY },
  { batteries: 500, requiredHeroTier: tierNames.LEGENDARY },
  { batteries: 750, requiredHeroTier: tierNames.LEGENDARY },
  { batteries: 1000, requiredHeroTier: tierNames.MYTHIC },
  { batteries: 1250, requiredHeroTier: tierNames.MYTHIC },
  { batteries: 1500, requiredHeroTier: tierNames.SUPREME },
  { batteries: 2000, requiredHeroTier: tierNames.ULTIMATE },
  { batteries: 2500, requiredHeroTier: tierNames.CELESTIAL },
  { batteries: 3250, requiredHeroTier: tierNames.CELESTIAL },
  { batteries: 4500, requiredHeroTier: tierNames.STELLAR },
];
/**
 * Upgrade 0 is upgrading from rank 1 to 2
 * 20 levels, 19 upgrades
 */
const divineUpgradeCost = [
  {
    experience: 40,
    stones: 10,
  },
  {
    experience: 75,
    stones: 18,
  },
  {
    experience: 90,
    stones: 22,
  },
  {
    experience: 100,
    stones: 28,
  },
  {
    experience: 115,
    stones: 32,
  },
  {
    experience: 120,
    stones: 36,
  },
  {
    experience: 130,
    stones: 40,
  },
  {
    experience: 135,
    stones: 46,
  },
  {
    experience: 145,
    stones: 50,
  },
  {
    experience: 150,
    stones: 54,
  },
  {
    experience: 155,
    stones: 60,
  },
  {
    experience: 160,
    stones: 64,
  },
  {
    experience: 160,
    stones: 68,
  },
  {
    experience: 165,
    stones: 72,
  },
  {
    experience: 170,
    stones: 72,
  },
  {
    experience: 175,
    stones: 72,
  },
  {
    experience: 175,
    stones: 82,
  },
  {
    experience: 180,
    stones: 82,
  },
  {
    experience: 185,
    stones: 90,
  },
];

const baseHeroSVG = {
  background: document.querySelector("#base-hero-background"),
  topStripe: document.querySelector("#base-hero-top-stripe"),
  bottomStripe: document.querySelector("#base-hero-bottom-stripe"), // don't edit fill
  // defs
  bottomGradient: document.querySelector("#base-hero-bottom-gradient"),

  rightBorder: document.querySelector("#base-hero-right-border"),
  leftBorder: document.querySelector("#base-hero-left-border"),
  topBorder: document.querySelector("#base-hero-top-border"),
  bottomBorder: document.querySelector("#base-hero-bottom-border"),
};
setElementColorClass(baseHeroSVG.background, "common-color");
setElementColorClass(baseHeroSVG.topStripe, "common-color");
setElementGradientClass(baseHeroSVG.bottomGradient, "common-gradient");

setBorderColorClass(baseHeroSVG.rightBorder, "border-color-stroke");
setBorderColorClass(baseHeroSVG.leftBorder, "border-color-stroke");
setBorderColorClass(baseHeroSVG.bottomBorder, "border-color-fill");
setBorderColorClass(baseHeroSVG.topBorder, "border-color-fill");

function setBorderColorClass(element, newClassName) {
  element.classList.remove("divine-gold-color-fill");
  element.classList.remove("divine-gold-color-stroke");
  element.classList.remove("border-color-stroke");
  element.classList.remove("border-color-fill");

  element.classList.add(newClassName);
}

function setElementColorClass(element, newClassName) {
  element.classList.remove("common-color");
  element.classList.remove("rare-color");
  element.classList.remove("epic-color");
  element.classList.remove("legendary-color");
  element.classList.remove("mythic-color");
  element.classList.remove("supreme-color");
  element.classList.remove("ultimate-color");
  element.classList.remove("celestial-color");
  element.classList.remove("stellar-color");
  element.classList.remove("immortal-color");
  element.classList.remove("divine-color");

  element.classList.add(newClassName);
}

function setElementGradientClass(element, newClassName) {
  element.classList.remove("common-gradient");
  element.classList.remove("rare-gradient");
  element.classList.remove("epic-gradient");
  element.classList.remove("legendary-gradient");
  element.classList.remove("mythic-gradient");
  element.classList.remove("supreme-gradient");
  element.classList.remove("ultimate-gradient");
  element.classList.remove("celestial-gradient");
  element.classList.remove("stellar-gradient");
  element.classList.remove("immortal-gradient");
  element.classList.remove("divine-gradient");

  element.classList.add(newClassName);
}

let selectedHeroTier = {
  base: 1,
  final: 2,
  baseBoost: false,
  finalBoost: true,
};

const baseHeroTierSelect = document.querySelector("#upgrade-hero-base-level");
baseHeroTierSelect.innerHTML = ``;

baseHeroTierSelect.addEventListener("change", () => {
  const tierValue = baseHeroTierSelect.value;
  // isBoost means is the same level number but tier higher
  const isBoost = tierValue.endsWith("-b");
  const pureNumber = parseInt(tierValue, 10);
  let tierNumber = 0;
  if (pureNumber < 85) {
    tierNumber = Math.floor(pureNumber / 10);
    if (pureNumber % 10 == 0) {
      if (!isBoost) tierNumber--;
    }
  } else if (pureNumber == 85) {
    if (!isBoost) tierNumber = 8;
    else tierNumber = 9;
  } else if (pureNumber < 90 || (pureNumber == 90 && !isBoost)) tierNumber = 9;
  else tierNumber = 10;
  const tierName = tierValues[tierNumber].toLowerCase();
  selectedHeroTier.base = pureNumber;
  if (pureNumber % 10 == 0 || pureNumber == 85) {
    selectedHeroTier.baseBoost = isBoost;
  } else selectedHeroTier.baseBoost = false;

  handleHeroLevelSelection();

  if (tierName !== "divine") {
    setElementColorClass(baseHeroSVG.background, `${tierName}-color`);
    setElementColorClass(baseHeroSVG.topStripe, `${tierName}-color`);

    setBorderColorClass(baseHeroSVG.topBorder, "border-color-fill");
    setBorderColorClass(baseHeroSVG.bottomBorder, "border-color-fill");
    setBorderColorClass(baseHeroSVG.rightBorder, "border-color-stroke");
    setBorderColorClass(baseHeroSVG.leftBorder, "border-color-stroke");

    setElementGradientClass(baseHeroSVG.bottomGradient, `${tierName}-gradient`);
  } else {
    setElementColorClass(baseHeroSVG.background, `divine-color`);
    setElementColorClass(baseHeroSVG.topStripe, `divine-color`);

    setBorderColorClass(baseHeroSVG.topBorder, "divine-gold-color-fill");
    setBorderColorClass(baseHeroSVG.bottomBorder, "divine-gold-color-fill");
    setBorderColorClass(baseHeroSVG.rightBorder, "divine-gold-color-stroke");
    setBorderColorClass(baseHeroSVG.leftBorder, "divine-gold-color-stroke");

    setElementGradientClass(baseHeroSVG.bottomGradient, `divine-gradient`);
  }
});

const finalHeroSVG = {
  background: document.querySelector("#final-hero-background"),
  topStripe: document.querySelector("#final-hero-top-stripe"),
  bottomStripe: document.querySelector("#final-hero-bottom-stripe"), // don't edit fill
  // defs
  bottomGradient: document.querySelector("#final-hero-bottom-gradient"),

  rightBorder: document.querySelector("#final-hero-right-border"),
  leftBorder: document.querySelector("#final-hero-left-border"),
  topBorder: document.querySelector("#final-hero-top-border"),
  bottomBorder: document.querySelector("#final-hero-bottom-border"),
};
setElementColorClass(finalHeroSVG.background, "common-color");
setElementColorClass(finalHeroSVG.topStripe, "common-color");
setElementGradientClass(finalHeroSVG.bottomGradient, "common-gradient");

setBorderColorClass(finalHeroSVG.rightBorder, "border-color-stroke");
setBorderColorClass(finalHeroSVG.leftBorder, "border-color-stroke");
setBorderColorClass(finalHeroSVG.bottomBorder, "border-color-fill");
setBorderColorClass(finalHeroSVG.topBorder, "border-color-fill");

const finalHeroTierSelect = document.querySelector("#upgrade-hero-final-level");
finalHeroTierSelect.innerHTML = ``;

finalHeroTierSelect.addEventListener("change", () => {
  const tierValue = finalHeroTierSelect.value;
  // is already boosted to higher level
  const isBoost = tierValue.endsWith("-b");
  const pureNumber = parseInt(tierValue, 10);
  let tierNumber = 0;
  if (pureNumber < 85) {
    tierNumber = Math.floor(pureNumber / 10);
    if (pureNumber % 10 == 0) {
      if (!isBoost) tierNumber--;
    }
  } else if (pureNumber == 85) {
    if (!isBoost) tierNumber = 8;
    else tierNumber = 9;
  } else if (pureNumber < 90 || (pureNumber == 90 && !isBoost)) tierNumber = 9;
  else tierNumber = 10;
  const tierName = tierValues[tierNumber].toLowerCase();
  selectedHeroTier.final = pureNumber;

  if (pureNumber % 10 == 0 || pureNumber == 85) {
    selectedHeroTier.finalBoost = isBoost;
  } else selectedHeroTier.finalBoost = false;

  handleHeroLevelSelection();

  if (tierName !== "divine") {
    document.querySelector("#divine-golden-svg-border").classList.add("hidden");

    setElementColorClass(finalHeroSVG.background, `${tierName}-color`);
    setElementColorClass(finalHeroSVG.topStripe, `${tierName}-color`);

    setBorderColorClass(finalHeroSVG.topBorder, "border-color-fill");
    setBorderColorClass(finalHeroSVG.bottomBorder, "border-color-fill");
    setBorderColorClass(finalHeroSVG.rightBorder, "border-color-stroke");
    setBorderColorClass(finalHeroSVG.leftBorder, "border-color-stroke");

    setElementGradientClass(
      finalHeroSVG.bottomGradient,
      `${tierName}-gradient`,
    );
  } else {
    document
      .querySelector("#divine-golden-svg-border")
      .classList.remove("hidden");

    setElementColorClass(finalHeroSVG.background, `divine-color`);
    setElementColorClass(finalHeroSVG.topStripe, `divine-color`);

    setBorderColorClass(finalHeroSVG.topBorder, "divine-gold-color-fill");
    setBorderColorClass(finalHeroSVG.bottomBorder, "divine-gold-color-fill");
    setBorderColorClass(finalHeroSVG.rightBorder, "divine-gold-color-stroke");
    setBorderColorClass(finalHeroSVG.leftBorder, "divine-gold-color-stroke");

    setElementGradientClass(finalHeroSVG.bottomGradient, `divine-gradient`);
  }
});

function handleHeroLevelSelection() {
  const cost = getHeroUpgradeCostv2(
    selectedHeroTier.base,
    selectedHeroTier.final,
    selectedHeroTier.baseBoost,
    selectedHeroTier.finalBoost,
  );

  DOM.resultPanel.innerHTML =
    cost.error ||
    `Cost: ${cost.coins} <img src="./images/resources/coins.png" alt="coins" class="resource-result-image" /> ${cost.cards} <img src="./images/resources/hero_cards.png" alt="hero_cards" class="resource-result-image" />`;
}

/* * SELECTS GENERATING * */
let lastHadTierBoost = false;
heroUpgradeCost.forEach((cost) => {
  const optionTierValue = cost.tierBoost ? cost.newTier - 1 : cost.newTier;
  const optionColor = tierColors[optionTierValue];
  const optionLevelNumber = cost.tierBoost
    ? cost.finalLevel
    : cost.finalLevel - 1;

  const option = `
  <option value="${optionLevelNumber + (!cost.tierBoost ? "-b" : "")}"
    style="background-color:${optionColor}; color:${optionLevelNumber >= 80 ? "#d6d6d6" : "black"}">${optionLevelNumber} - ${lastHadTierBoost ? "after tier boost" : tierValues[optionTierValue]}
  </option>
  `;
  baseHeroTierSelect.innerHTML += option;
  if (optionLevelNumber > 1) finalHeroTierSelect.innerHTML += option;

  if (lastHadTierBoost) lastHadTierBoost = false;
  if (cost.tierBoost) lastHadTierBoost = true;
});
const option = `
  <option value="90-b"
    style="background-color:${tierColors[10]}; color:white">DIVINE
  </option>
  `;
finalHeroTierSelect.innerHTML += option;

DOMforms.heroUpgradeCost.form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// * MOD UPGRADE COST * //
const modsCost = [100, 50, 150, 250, 500];

/**
 * calculates amount of coils needed to acquire specific level of weapon mod
 * @param {*} 1-5
 * @returns amount of coils needed to acquire specific level of weapon mod
 */
function calculateModUpgradeCost(wantedLevel) {
  if (wantedLevel < 1 || wantedLevel > 5) return 0;

  let totalCost = 0;

  if (wantedLevel === 5) {
    const branchCost = modsCost[0] + modsCost[1] + modsCost[2] + modsCost[3];
    totalCost = 3 * branchCost + modsCost[4];
  } else {
    for (let i = 0; i < wantedLevel; i++) {
      totalCost += modsCost[i];
    }
  }

  return totalCost;
}

// * LEVEL TREE * //
let activeTracks = { 0: null, 1: null, 2: null, 3: null, 4: null };

function handleSkillSelection(tier, position) {
  const cost = calculateModUpgradeCost(tier + 1);
  DOM.resultPanel.innerHTML = `Cost: ${cost} <img src="./images/resources/coils.png" class="resource-result-image">`;

  activeTracks = { 0: null, 1: null, 2: null, 3: null, 4: null };
  document
    .querySelectorAll(".hexagon")
    .forEach((h) => h.classList.remove("active"));

  if (tier === 0) {
    activeTracks[0] = position;
  } else if (tier === 1) {
    activeTracks[0] = position;
    activeTracks[1] = position;
  } else if (tier === 2) {
    activeTracks[0] = position;
    activeTracks[1] = position;
    activeTracks[2] = position;
  } else if (tier === 3) {
    activeTracks[0] = position;
    activeTracks[1] = position;
    activeTracks[2] = position;
    activeTracks[3] = position;
  } else if (tier === 4) {
    activeTracks[0] = "all";
    activeTracks[1] = "all";
    activeTracks[2] = "all";
    activeTracks[3] = "all";
    activeTracks[4] = position;
  }

  for (let t = 0; t <= 4; t++) {
    const currentTrack = activeTracks[t];
    if (!currentTrack) continue;

    const row = document.getElementById(`tier-${t}`);
    if (!row) continue;

    if (currentTrack === "all") {
      row
        .querySelectorAll(".hexagon")
        .forEach((h) => h.classList.add("active"));
    } else {
      const targetHex = row.querySelector(
        `.hexagon[onclick*="'${currentTrack}'"]`,
      );
      if (targetHex) {
        targetHex.classList.add("active");
      }
    }
  }
  refreshAllLines();
}

function refreshAllLines() {
  const tier0Lines = ["line-left-0", "line-mid-0", "line-right-0"];
  const tier1Lines = ["line-left-1", "line-mid-1", "line-right-1"];
  const tier2Lines = ["line-left-2", "line-mid-2", "line-right-2"];
  const tier3Lines = ["line-left-3", "line-mid-3", "line-right-3"];
  const tier4Paths = ["path-final-1", "path-final-2", "path-final-4"];

  const setClass = (id, className, add) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (add) el.classList.add(className);
    else el.classList.remove(className);
  };

  tier0Lines.forEach((id) => setClass(id, "active-gray", false));
  tier1Lines.forEach((id) => setClass(id, "active-green", false));
  tier2Lines.forEach((id) => setClass(id, "active-blue", false));
  tier3Lines.forEach((id) => setClass(id, "active-yellow", false));
  tier4Paths.forEach((id) => setClass(id, "active-orange", false));

  // --- Tier 0 (Gray) ---
  if (activeTracks[0] === "all") {
    tier0Lines.forEach((id) => setClass(id, "active-gray", true));
  } else if (activeTracks[0]) {
    setClass(`line-${activeTracks[0]}-0`, "active-gray", true);
  }

  // --- Tier 1 (Green) ---
  if (activeTracks[1] === "all") {
    tier1Lines.forEach((id) => setClass(id, "active-green", true));
  } else if (activeTracks[1]) {
    setClass(`line-${activeTracks[1]}-1`, "active-green", true);
  }

  // --- Tier 2 (Blue) ---
  if (activeTracks[2] === "all") {
    tier2Lines.forEach((id) => setClass(id, "active-blue", true));
  } else if (activeTracks[2]) {
    setClass(`line-${activeTracks[2]}-2`, "active-blue", true);
  }

  // --- Tier 3 (Yellow) ---
  if (activeTracks[3] === "all") {
    tier3Lines.forEach((id) => setClass(id, "active-yellow", true));
  } else if (activeTracks[3]) {
    setClass(`line-${activeTracks[3]}-3`, "active-yellow", true);
  }

  // --- Tier 4 (Orange) ---
  if (activeTracks[4] === "final-1") {
    setClass("path-final-1", "active-orange", true);
    setClass("path-final-2", "active-orange", true);
  } else if (activeTracks[4] === "final-2") {
    setClass("path-final-1", "active-orange", true);
    setClass("path-final-4", "active-orange", true);
  }
}

// * GEAR UPGRADE COST * //
DOMforms.gearUpgradeCost.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentLevel = Number(
    DOMforms.gearUpgradeCost.form["gear-base-level"].value,
  );
  const wantedLevel = Number(
    DOMforms.gearUpgradeCost.form["gear-wanted-level"].value,
  );

  if (wantedLevel <= currentLevel) {
    DOM.resultPanel.innerHTML = `<p>Wanted level cannot be higher than what you have now</p>`;
    return;
  }

  const gearType = DOMforms.gearUpgradeCost.form["gear-type"].value;

  let cost = { nuts: 0, copies: 0 };
  for (let i = currentLevel; i < wantedLevel; i++) {
    cost.nuts += gearUpgradeCost[gearType][i].nuts;
    cost.copies += gearUpgradeCost[gearType][i].copies;
  }
  DOM.resultPanel.innerHTML = `Cost: <u>${cost.nuts}</u> <img src="./images/resources/nuts.png" class="resource-result-image"> and <u>${cost.copies}</u> 
  ${
    gearType === "personal"
      ? '<img src="./images/resources/gear_personal.png" class="resource-result-image">'
      : gearType === "common"
        ? '<img src="./images/resources/gear_common.png" class="resource-result-image">'
        : '<img src="./images/resources/gear_weapon.png" class="resource-result-image">'
  }`;
});

DOMforms.enemyArmorResistance.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValues = {
    healthDmgDealt: Number(
      DOMforms.enemyArmorResistance.form["damage-dealt-health"].value,
    ),
    armorDmgDealt: Number(
      DOMforms.enemyArmorResistance.form["damage-dealt-armor"].value,
    ),
    dmgDealt: Number(DOMforms.enemyArmorResistance.form["damage-dealt"].value),
  };

  if (
    inputValues.dmgDealt !==
    inputValues.healthDmgDealt + inputValues.armorDmgDealt
  ) {
    DOM.resultPanel.innerHTML = `<p><span style="color: #FF0000">!!!</span> - Numbers you gave are incorrect: damage you dealt (yellow text) is not equals sum of damage dealt against health and damage dealt against armor</p>`;
    return;
  }
});

DOMforms.dmgToEnemy.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValues = {
    dmgPerShot: Number(DOMforms.dmgToEnemy.form["dmg-per-shot"].value),
    pelletsPerShot: Number(DOMforms.dmgToEnemy.form["pellets-per-shot"].value),
    healthMultiplier: Number(DOMforms.dmgToEnemy.form["health-multip"].value),
    explosiveUpgrade: Number(
      DOMforms.dmgToEnemy.form["explosive-upgrade"].value,
    ),
    armorMultiplier: Number(DOMforms.dmgToEnemy.form["armor-multip"].value),
    armorPenetration: Number(
      DOMforms.dmgToEnemy.form["armor-penetration"].value,
    ),
  };
  console.log(inputValues);

  const realDamage = Math.floor(
    inputValues.dmgPerShot * (1 + inputValues.explosiveUpgrade / 100),
  );

  const damageAgainstHealth = Math.floor(
    realDamage *
      ((inputValues.armorPenetration + inputValues.explosiveUpgrade) / 100) *
      inputValues.healthMultiplier,
  );
  const damageAgainstArmor = Math.floor(
    realDamage *
      ((100 - (inputValues.armorPenetration + inputValues.explosiveUpgrade)) /
        100) *
      inputValues.armorMultiplier,
  );
  const damageAgainstHealthPlain = Math.floor(
    realDamage * inputValues.healthMultiplier,
  );

  DOM.resultPanel.innerHTML = `
    <h1>Results</h1>
    <p>Real damage: ${realDamage}</p>
    <p>Damage against health: ${damageAgainstHealth} with full armor</p>
    <p>Damage against health: ${damageAgainstHealthPlain} without full armor</p>
    <p>Damage against armor: ${damageAgainstArmor} with full armor</p>
  `;
});
