const urlParams = new URLSearchParams(window.location.search);
const calculatorType = urlParams.get("type");

const DOM = {
  resultPanel: document.querySelector("#results-panel"),
  damageToEnemyPanel: document.querySelector("#damage-to-enemy-panel"),
  enemyArmorResistance: document.querySelector("#enemy-armor-resistance-panel"),
};

if (calculatorType === "damage_to_enemy") showPanel(DOM.damageToEnemyPanel);
else if (calculatorType === "armor_resistance")
  showPanel(DOM.enemyArmorResistance);
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
};

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
