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
  {
    name: "Bonnie",
    faction: "Force and Arms",
    class: "Scout",
    abilityName: "Toxic Hounds",
    abilityDescription: "-",
    medkitType: medkitTypes.Stim,
  },
  {
    name: "Lynx",
    faction: "Force and Arms",
    class: "Sniper",
    abilityName: "Rain of Arrows",
    abilityDescription: "-",
    medkitType: medkitTypes.None,
    hasUniqueSkin: true,
    uniqueSkinName: "Deathglow Lynx",
    uniqueSkinGifSrc: "../skins/unique_lynx_gif.gif",
    uniqueSkinAbilityImage: "../skins/unique_lynx_ability.png",
  },
  {
    name: "Twinkle",
    faction: "PYRO",
    class: "Scout",
    abilityName: "Force Bomb",
    abilityDescription: "-",
    medkitType: medkitTypes.Stim,
    hasUniqueSkin: true,
    uniqueSkinName: "Dynasty Twinkle",
    uniqueSkinGifSrc: "../skins/unique_twinkle_gif.gif",
    uniqueSkinAbilityImage: "../skins/unique_twinkle_ability.png",
  },
];
const newestHeroName = "Bonnie";

heroes.sort((a, b) => {
  const aNew = a.name === newestHeroName;
  const bNew = b.name === newestHeroName;

  if (aNew !== bNew) {
    return bNew - aNew;
  }

  return a.name.localeCompare(b.name);
});

function generateHeroesCards() {
  const heroesCardsContainer = document.querySelector("#content-cards");
  if (!heroesCardsContainer) return;

  heroesCardsContainer.innerHTML = "";

  heroes.forEach((hero) => {
    const heroCard = document.createElement("div");
    heroCard.className = "content-card";
    if (newestHeroName === hero.name) heroCard.classList.add("new-hero");

    heroCard.addEventListener("click", () => {
      window.location.href = `index.html?hero=${hero.name.toLowerCase()}`;
    });

    // Dodano pojemnik .content-card-badge ze zdjęciem klasy bohatera
    heroCard.innerHTML = `
    <div class="new-hero-tag">NEW</div> 
        <div class="content-card-badge">
          <img src="../classes/${hero.class.toLowerCase()}.png" alt="${hero.class}-icon">
        </div>
        <div class="unique-skin-star ${hero.hasUniqueSkin ? "" : "hidden"}" title="Unique Skin"></div>
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

  const currentHero = heroes.find(
    (h) => h.name.toLowerCase() === heroParam.toLowerCase(),
  );

  if (currentHero && heroContentContainer) {
    heroContentContainer.innerHTML = getHeroPanelHTML(currentHero);
    if (currentHero.hasUniqueSkin) {
      const hero = currentHero;
      heroContentContainer.innerHTML += `<div class="bullet-echo-container">
  <div class="cyber-panel">
    <div class="cyber-grid-bg"></div>
    <div class="cyber-corner-accent top-left"></div>
    <div class="cyber-corner-accent bottom-right"></div>
    
    <!-- stars -->
    <div class="cyber-sparkle sparkle-1"></div>
    <div class="cyber-sparkle sparkle-2"></div>
    <div class="cyber-sparkle sparkle-3"></div>
    <div class="cyber-sparkle sparkle-4"></div>
    <div class="cyber-sparkle sparkle-5"></div>
    <div class="cyber-sparkle sparkle-6"></div>

    <div class="cyber-header">
      <div class="cyber-title-area">
        <h1 class="cyber-hero-name">Unique ${hero.uniqueSkinName} Skin</h1>
        <div class="cyber-tag-wrapper">
          <span class="cyber-tag tag-cyan">${hero.faction}</span>
          <span class="cyber-tag tag-magenta">${hero.class}</span>
        </div>
      </div>
      <div class="cyber-deco-bar"></div>
    </div>

    <div class="cyber-body">
      <div class="cyber-info-lane">
        <div class="cyber-card card-cyan">
          <div class="cyber-card-indicator"></div>
          <div class="cyber-card-header">
            <span class="cyber-dot-active"></span>
            <h2>ABILITY</h2>
          </div>
          <img src="${hero.uniqueSkinAbilityImage}" alt="unique_ability_image" />
          <div class="cyber-sub-bar"></div>
        </div>

        <div class="cyber-card card-magenta">
          <div class="cyber-card-indicator"></div>
          <div class="cyber-card-header">
            <span class="cyber-dot-active pink-glow"></span>
            <h2>PREVIEW</h2>
          </div>
          <img src="${hero.uniqueSkinGifSrc}" alt="unique_skin_presentation">
          <div class="cyber-sub-bar"></div>
        </div>

        <div class="cyber-badge-row">
          <div class="cyber-icon-frame frame-cyan">
            <img src="../classes/${hero.class.toLowerCase()}.png" alt="${hero.class}" />
            <div class="frame-corner"></div>
          </div>
          <div class="cyber-icon-frame frame-magenta">
            <img src="../factions/${hero.faction.toLowerCase()}.png" alt="${hero.faction}" />
            <div class="frame-corner"></div>
          </div>
        </div>
      </div>

      <div class="cyber-display-lane">
        <div class="cyber-viewshield">
          
          <div class="cyber-moon-aura"></div>
          
          <img 
            src="../skins/unique_${hero.name.toLocaleLowerCase()}.png" 
            alt="${hero.name}" 
            class="cyber-render-img" 
          />
          
          <div class="cyber-tech-pedestal">
            <div class="pedestal-core"></div>
            <div class="pedestal-ring"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
    }
  } else if (heroContentContainer) {
    heroContentContainer.innerHTML = `<div class="error">Hero not found</div>`;
  }
})();
