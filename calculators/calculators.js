const urlParams = new URLSearchParams(window.location.search);
const calculatorType = urlParams.get("type");

const DOM = {
  damageToEnemyPanel: document.querySelector("#damage-to-enemy-panel"),
};

if (calculatorType === "damage_to_enemy") showDamageToEnemyCalculator();

function showDamageToEnemyCalculator() {
  DOM.damageToEnemyPanel.classList.remove("hidden");
}

// * FORMS * //
const DOMforms = {
  dmgToEnemy: {
    form: document.querySelector("#dmg-en-input-form"),
  },
};

DOMforms.dmgToEnemy.form.addEventListener("submit", (e) => {
  e.preventDefault();
});
