const urlParams = new URLSearchParams(window.location.search);
const calculatorType = urlParams.get("type");

const DOM = {
  resultPanel: document.querySelector("#results-panel"),
  damageToEnemyPanel: document.querySelector("#damage-to-enemy-panel"),
  enemyArmorResistancePanel: document.querySelector(
    "#enemy-armor-resistance-panel",
  ),
  gearUpgradeCostPanel: document.querySelector("#gear-upgrade-cost-panel"),
};

if (calculatorType === "damage_to_enemy") showPanel(DOM.damageToEnemyPanel);
else if (calculatorType === "armor_resistance")
  showPanel(DOM.enemyArmorResistancePanel);
else if (calculatorType === "gear_upgrade") showPanel(DOM.gearUpgradeCostPanel);
else DOM.resultPanel.innerHTML = `This page is being prepared`;

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
const levelNames = {
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

DOMforms.gearUpgradeCost.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentLevel = Number(
    DOMforms.gearUpgradeCost.form["gear-base-level"].value,
  );
  const wantedLevel = Number(
    DOMforms.gearUpgradeCost.form["gear-wanted-level"].value,
  );

  if (wantedLevel <= currentLevel) {
    DOM.resultPanel.innerHTML = `<p><span style="color: #FF0000">!!!</span> - Wanted level cannot be higher that what you have now</p>`;
    return;
  }

  const gearType = DOMforms.gearUpgradeCost.form["gear-type"].value;

  let cost = { nuts: 0, copies: 0 };
  for (let i = currentLevel; i < wantedLevel; i++) {
    cost.nuts += gearUpgradeCost[gearType][i].nuts;
    cost.copies += gearUpgradeCost[gearType][i].copies;
  }
  DOM.resultPanel.innerHTML = `<p>Cost: <u>${cost.nuts}</u> nuts and <u>${cost.copies}</u> gear copies</p>`;
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
