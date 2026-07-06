const medkitTypes = {
  None: { name: "None", description: "None" },
  Stim: {
    name: "Stim",
    description: "Increases health by second and movement speed",
  },
};

const heroes = [
  {
    name: "Alice",
    faction: "Renegades",
    class: "Scout",
    abilityName: "Portal Gun",
    abilityDescription: "Creates linked portals for instant travel",
    medkitType: medkitTypes.Stim,
  },
];

heroes.sort((a, b) => a.name.localeCompare(b.name));

function generateHeroesCards() {
  const heroesCardsContainer = document.querySelector("#content-cards");
  if (!heroesCardsContainer) return;

  heroesCardsContainer.innerHTML = "";

  heroes.forEach((hero) => {
    const heroCard = document.createElement("div");
    heroCard.className = "content-card";

    heroCard.addEventListener("click", () => {
      window.location.href = `index.html?hero=${hero.name.toLowerCase()}`;
    });

    // Dodano pojemnik .content-card-badge ze zdjęciem klasy bohatera
    heroCard.innerHTML = `
        <div class="content-card-badge">
          <img src="../classes/${hero.class.toLowerCase()}.png" alt="${hero.class}-icon">
        </div>
        <img src="../skins/${hero.name.toLowerCase()}.png" alt="${hero.name}-card">
        <div class="content-card-name">${hero.name}</div>
    `;
    heroesCardsContainer.appendChild(heroCard);
  });
}

generateHeroesCards();

//! UPDATE
const getHeroPanelHTML = (hero) => `
<div class="hero-info-container">
  <div class="panel-wrapper">
    <div class="character-panel">
      <div class="panel-layout">
        
        <!-- LEWA STRONA: ODZNAKI I OPISY -->
        <div class="left-column">
          
          <!-- Odznaki ułożone obok siebie w rzędzie -->
          <div class="badges-row">
            <div class="hexagon-glow-wrap left">
              <div class="hexagon"></div>
              <div class="hexagon-text">
                <img
                  src="../classes/${hero.class.toLowerCase()}.png"
                  alt="${hero.class}-icon"
                  class="rotated-hexagon-icon smaller"
                />
              </div>
            </div>
            
            <div class="hexagon-glow-wrap right">
              <div class="hexagon"></div>
              <div class="hexagon-text">
                <img
                  src="../factions/${hero.faction.toLowerCase()}.png"
                  alt="${hero.faction}-icon"
                  class="bigger"
                />
              </div>
            </div>
          </div>

          <div class="sci-fi-frame">
            <div class="inner-content">Ability: ${hero.abilityName}
              <p class="small-paragraph">${hero.abilityDescription}</p>
            </div>

            <div class="inner-content">Medkit: ${hero.medkitType.name}
              <p class="small-paragraph">${hero.medkitType.description}</p>
            </div>
          </div>

        </div>

        <div class="right-column">
              <div class="top-banner">
        <div class="banner-content">
          <span class="char-name">${hero.name}</span>
          <span class="char-lvl">${hero.faction} ${hero.class}</span>
        </div>
      </div>
          <div class="character-display">
            <img
              src="../skins/${hero.name.toLowerCase()}.png"
              alt="${hero.name}-skin"
              class="char-img"
            />
            <div class="neon-pedestal"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
`;

(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const heroParam = urlParams.get("hero");

  const cardsContainer = document.querySelector("#content-cards");
  const heroContentContainer = document.querySelector("#hero-content");

  if (!heroParam) {
    if (cardsContainer) cardsContainer.classList.remove("hidden");
    if (heroContentContainer) heroContentContainer.innerHTML = ``;
    return;
  }

  if (cardsContainer) cardsContainer.classList.add("hidden");

  // 2. Szukanie bohatera bezpośrednio w tablicy heroes zamiast w osobnym obiekcie
  const currentHero = heroes.find(
    (h) => h.name.toLowerCase() === heroParam.toLowerCase(),
  );

  if (currentHero && heroContentContainer) {
    heroContentContainer.innerHTML = getHeroPanelHTML(currentHero);
  } else if (heroContentContainer) {
    heroContentContainer.innerHTML = `<div class="error">Hero not found</div>`;
  }
})();
