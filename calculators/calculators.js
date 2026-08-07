import {
  gearUpgradeCost,
  heroUpgradeCost,
  talentUpgradeCost,
  divineUpgradeCost,
  droneUpgradeCost,
  moduleUpgradeCost,
} from "./upgrade_cost.js";

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
  droneUpgradeCostPanel: document.querySelector("#drone-upgrade-cost-panel"),
  densityPanel: document.querySelector("#density-panel"),
};

//* dmg to enemy
if (calculatorType === "damage_to_enemy") {
  showPanel(DOM.damageToEnemyPanel);
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;
  DOM.infoTipPanel.innerHTML = `<p><span class="info-icon"><img src="../images/info_icon.png" /></span>This calculator may not be accurate, because <span class="red-span">armor resistance decreases damage</span>. It will only work 100% when enemy has no armor at all.</p>`;
  //* armor resistance
} else if (calculatorType === "armor_resistance") {
  //showPanel(DOM.enemyArmorResistancePanel);
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;
  //* gear upgrade
} else if (calculatorType === "gear_upgrade") {
  showPanel(DOM.gearUpgradeCostPanel);
  DOM.resultPanel.innerHTML = `<p>Select <u>base and final levels</u> and <u>gear type</u> to calculate the amount of <u>nuts</u> and <u>gear copies</u> you need to upgrade</p>`;
  DOM.infoTipPanel.innerHTML = `<p>
    Remember to wait until "<span class="blue-span">Gear Rush</span>" discount begins, so you can
    <span class="green-span">save up to 10%</span> on resources! The discount appears every 6
    weeks, and along with it - leaderboard and special road with
    rewards!
  </p>
  <img
    src="./images/gear_rush.webp"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />`;
  //* mod upgrade
} else if (calculatorType === "mod_upgrade") {
  showPanel(DOM.modUpgradeCostPanel);
  DOM.resultPanel.innerHTML = `<p>Click desired mod to check how many <u>coils</u> and which <u>previous tiers</u> you need to get this upgrade</p>`;
  DOM.infoTipPanel.innerHTML = `
   <p><span class="info-icon"><img src="../images/info_icon.png" /></span>If you want to buy some mod, you need to unlock all the previous ones first (they are above the one you want). If you want to buy the last, mythic mod, you need to unlock <u>all 3 columns</u> first.</p>
<br />
   <p><span class="info-icon"><img src="../images/info_icon.png" /></span>Remember, that every mod (except for common ones) give both <span class="green-span">buffs</span> and <span class="red-span">debuffs</span> to your weapon. Remember to make your modbuild compatible with your gearbuild!</p>`;
  //* hero upgrade
} else if (calculatorType === "hero_upgrade") {
  DOM.resultPanel.innerHTML =
    "<p>Select <u>level</u> and <u>tier</u> to calculate required <u>hero cards</u> and <u>coins</u></p>";
  DOM.infoTipPanel.innerHTML = `<p>
    Remember to wait until "<span class="blue-span">Hero Rush</span>" discount begins, so you can
    <span class="green-span">save up to 20%</span> on resources! The discount appears every 6
    weeks, and along with it - leaderboard and special road with
    rewards!
  </p>
  <img
    src="./images/hero_rush.webp"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />`;
  showPanel(DOM.heroUpgradeCostPanel);
  //* drone upgrade
} else if (calculatorType === "drone_upgrade") {
  DOM.resultPanel.innerHTML = `<p>Select <u>drone</u>, <u>drone level</u> and <u>module level</u> to calculate required <u>drone blueprints</u>, <u>drone cubes</u> and <u>module plugins</u></p>`;
  DOM.infoTipPanel.innerHTML = `
  <p>
    Remember to wait until "<span class="blue-span">Drone Rush</span>" discount begins, so you can
    <span class="green-span">save up to 20%</span> on resources! The discount appears every 6
    weeks, and along with it - leaderboard and special road with
    rewards!
  </p>
  <img
    src="./images/drone_update.webp"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_leaderboard.webp"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />
  <img
    src="./images/drone_rush_road.webp"
    alt="content-card"
    style="max-width: 100%; padding: 5px"
  />`;
  showPanel(DOM.droneUpgradeCostPanel);
  //* density
} else if (calculatorType === "density") {
  //showPanel(DOM.densityPanel);
  DOM.resultPanel.innerHTML = `<p style="font-size:25px;font-family:'Consolas'">This page is being prepared</p>`;
  DOM.infoTipPanel.innerHTML = `<p><span class="info-icon"><img src="../images/info_icon.png" /></span>Everything in Bullet Echo (players, walls, obstacles, some abilities) has something called <span class="blue-span">density</span> (or <span class="blue-span">piercing resistance</span>). It defines how difficult it is for bullets to go through. The higher the density - the higher <span class="blue-span">piercing power</span> bullets need to pierce through it. BUT if a bullet successfully pierces the object - it <span class="red-span">loses damage</span>.<br />
  In this calculator you will be able to calculate the density of an object you pierced.</p><br />
  <p><span class="info-icon"><img src="../images/info_icon.png" /></span>This calculator may not be accurate, because <span class="red-span">armor resistance decreases damage</span>. It will only work 100% when enemy has no armor at all.</p>`;
  //* default
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
  density: {
    form: document.querySelector("#density-input-form"),
  },
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

//#region hero
// * HERO UPGRADE COST * //

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
    `Cost: ${cost.coins} <img src="./images/resources/coins.webp" alt="coins" class="resource-result-image" /> ${cost.cards} <img src="./images/resources/hero_cards.webp" alt="hero_cards" class="resource-result-image" />`;
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

//#endregion

//#region mods

// * MOD UPGRADE COST * //
const modsCost = [100, 50, 150, 250, 500];

function calculateModUpgradeCost() {
  let totalCost = 0;

  for (let t = 0; t <= 4; t++) {
    totalCost += activeTracks[t].length * modsCost[t];
  }

  return totalCost;
}

// * LEVEL TREE * //
let activeTracks = { 0: [], 1: [], 2: [], 3: [], 4: [] };

window.handleSkillSelection = function (tier, position) {
  const index = activeTracks[tier].indexOf(position);
  if (index > -1) {
    activeTracks[tier].splice(index, 1);
  } else {
    activeTracks[tier].push(position);
  }

  const totalCost = calculateModUpgradeCost();
  DOM.resultPanel.innerHTML = `Cost: ${totalCost} <img src="./images/resources/coils.webp" class="resource-result-image">`;

  document
    .querySelectorAll(".hexagon")
    .forEach((h) => h.classList.remove("active"));

  for (let t = 0; t <= 4; t++) {
    const row = document.getElementById(`tier-${t}`);
    if (!row) continue;

    activeTracks[t].forEach((currentTrack) => {
      const targetHex = row.querySelector(
        `.hexagon[onclick*="'${currentTrack}'"]`,
      );
      if (targetHex) {
        targetHex.classList.add("active");
      }
    });
  }

  refreshAllLines();
};

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

  activeTracks[0].forEach((pos) =>
    setClass(`line-${pos}-0`, "active-gray", true),
  );
  activeTracks[1].forEach((pos) =>
    setClass(`line-${pos}-1`, "active-green", true),
  );
  activeTracks[2].forEach((pos) =>
    setClass(`line-${pos}-2`, "active-blue", true),
  );
  activeTracks[3].forEach((pos) =>
    setClass(`line-${pos}-3`, "active-yellow", true),
  );

  // --- Tier 4 (Orange) ---
  if (activeTracks[4].includes("final-1")) {
    setClass("path-final-1", "active-orange", true);
    setClass("path-final-2", "active-orange", true);
  }
  if (activeTracks[4].includes("final-2")) {
    setClass("path-final-1", "active-orange", true);
    setClass("path-final-4", "active-orange", true);
  }
}

//#endregion

//#region gears

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
  DOM.resultPanel.innerHTML = `Cost: <u>${cost.nuts}</u> <img src="./images/resources/nuts.webp" class="resource-result-image"> and <u>${cost.copies}</u> 
  ${
    gearType === "personal"
      ? '<img src="./images/resources/gear_personal.webp" class="resource-result-image">'
      : gearType === "common"
        ? '<img src="./images/resources/gear_common.webp" class="resource-result-image">'
        : '<img src="./images/resources/gear_weapon.webp" class="resource-result-image">'
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

//#endregion

//#region density

// * DENSITY * //
//TODO
DOMforms.density.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValues = {
    dmgPerShot: Number(DOMforms.density.form["piercing-dmg-per-shot"].value),
    healthDmgMod: Number(
      DOMforms.density.form["piercing-health-dmg-mod"].value,
    ),
    armorPenetration: Number(DOMforms.density.form["piercing-ap"].value),
    piercingPower: Number(DOMforms.density.form["piercing-piercing"].value),
    armorDmgMod: Number(DOMforms.density.form["piercing-armor-dmg-mod"].value),
    dmgToEnemy: Number(DOMforms.density.form["piercing-dmg-to-enemy"].value),
  };

  console.log({ inputValues });

  const plainDmgToHealth =
    inputValues.dmgPerShot * inputValues.armorPenetration * 100;
  const modifiedDmgToHealth = plainDmgToHealth * inputValues.healthDmgMod;
});

//#endregion

//#region drone UC
const droneBaseLevelSelect = DOM.droneUpgradeCostPanel.querySelector(
  "#upgrade-drone-base-level",
);
const droneFinalLevelSelect = DOM.droneUpgradeCostPanel.querySelector(
  "#upgrade-drone-final-level",
);

const moduleBaseLevelSelect = DOM.droneUpgradeCostPanel.querySelector(
  "#upgrade-module-base-level",
);
const moduleFinalLevelSelect = DOM.droneUpgradeCostPanel.querySelector(
  "#upgrade-module-final-level",
);

function getDroneUpgradeCost() {
  const baseLevel = Number(droneBaseLevelSelect.value);
  const finalLevel = Number(droneFinalLevelSelect.value);

  const baseModuleLevel = Number(moduleBaseLevelSelect.value);
  const finalModuleLevel = Number(moduleFinalLevelSelect.value);

  if (
    baseLevel < 0 ||
    finalLevel > 20 ||
    baseLevel >= finalLevel ||
    baseModuleLevel < 0 ||
    finalModuleLevel > 20 ||
    baseModuleLevel >= finalModuleLevel
  ) {
    DOM.resultPanel.innerHTML = `Incorrect values`;
    return { cubes: 0, blueprints: 0, plugins: 0 };
  }

  if (selectedDrone === "") return { cubes: 0, blueprints: 0, plugins: 0 };

  let cost = { cubes: 0, blueprints: 0, plugins: 0 };

  const singleDroneUpgradeCost = droneUpgradeCost[selectedDrone];
  const singleModuleUpgradeCost = moduleUpgradeCost[selectedDrone];

  for (let i = baseLevel; i < finalLevel; i++) {
    const upgrade = singleDroneUpgradeCost[i];

    cost.cubes += upgrade.cubes;
    cost.blueprints += upgrade.blueprints;
  }

  for (let i = baseModuleLevel; i < finalModuleLevel; i++) {
    const upgrade = singleModuleUpgradeCost[i];

    cost.plugins += upgrade;
  }

  console.log({ cost });
  DOM.resultPanel.innerHTML = /*html*/ `
    COST: 
      ${cost.cubes} <img src="./images/resources/cube.webp" class="resource-result-image"> 
      ${cost.blueprints} <img src="./images/resources/drone_cards.webp" class="resource-result-image">
      ${cost.plugins} <img src="./images/resources/plugin.webp" class="resource-result-image">
    `;
  return cost;
}

const dronesImages = {
  Agent: DOM.droneUpgradeCostPanel.querySelector("#agent-image"),
  Phantom: DOM.droneUpgradeCostPanel.querySelector("#phantom-image"),
  Zenith: DOM.droneUpgradeCostPanel.querySelector("#zenith-image"),
  Guard: DOM.droneUpgradeCostPanel.querySelector("#guard-image"),
  Medpro: DOM.droneUpgradeCostPanel.querySelector("#medpro-image"),
};

let selectedDrone = "";

window.handleDroneSelect = function (drone) {
  Object.values(dronesImages).forEach((image) => {
    if (image) image.classList.remove("selected");
  });

  if (dronesImages[drone]) {
    dronesImages[drone].classList.add("selected");

    selectedDrone = drone;

    getDroneUpgradeCost();
  }
};

for (let i = 0; i <= 20; i++) {
  if (i < 20) {
    droneBaseLevelSelect.insertAdjacentHTML(
      "beforeend",
      `<option value=${i}>${i}</option>`,
    );
    moduleBaseLevelSelect.insertAdjacentHTML(
      "beforeend",
      `<option value=${i}>${i}</option>`,
    );
  }
  if (i > 0) {
    droneFinalLevelSelect.insertAdjacentHTML(
      "beforeend",
      `<option value=${i}>${i}</option>`,
    );
    moduleFinalLevelSelect.insertAdjacentHTML(
      "beforeend",
      `<option value=${i}>${i}</option>`,
    );
  }
}

droneBaseLevelSelect.addEventListener("change", getDroneUpgradeCost);
droneFinalLevelSelect.addEventListener("change", getDroneUpgradeCost);
moduleBaseLevelSelect.addEventListener("change", getDroneUpgradeCost);
moduleFinalLevelSelect.addEventListener("change", getDroneUpgradeCost);
//#endregion
