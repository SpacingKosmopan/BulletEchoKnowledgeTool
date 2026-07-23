const medkitTypes = {
  None: { name: "None", description: "None" },
  Stim: {
    name: "Stim",
    description:
      "Increases health every second and increases movement speed for some time",
  },
  Bandage: {
    name: "Bandage",
    description:
      "Increases health and decreases movement loudness for some time",
  },
  TeamRecovery: {
    name: "Team Recovery",
    description: "Increases health and armor every second",
  },
  BattleKit: {
    name: "Battle Kit",
    description:
      "Increases health and armor, increases maximum health and maximum armor for some time",
  },
  TeamHealing: {
    name: "Team Healing",
    description:
      "Increases health every second, decreases incoming damage, allows hero to shoot while healing",
  },
};

export const heroes = [
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
    medkitType: medkitTypes.Bandage,
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
  {
    name: "Ramsay",
    faction: "PYRO",
    class: "Gunner",
    abilityName: "Rampage",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
    hasUniqueSkin: true,
    uniqueSkinName: "Padre Ramsay",
    uniqueSkinGifSrc: "../skins/unique_ramsay_gif.gif",
    uniqueSkinAbilityImage: "../skins/unique_ramsay_ability.png",
  },
  {
    name: "Flynt",
    faction: "PYRO",
    class: "Trooper",
    abilityName: "Blazing Wings",
    abilityDescription:
      "The hero takes off for a few seconds and travels a set distance. He can fly over walls and objects. While in flight, the hero takes no damage from shots or abilities, though certain abilities can interrupt the flight." +
      "When the ability ends, the hero lands and gains a barrier for a few seconds." +
      "If the hero flies over a visible enemy, he drops a fire bomb. It explodes on contact with the ground and creates a fire zone that expands over several seconds. The fire zone slows the movement speed of all units inside it and deals damage every second.",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Alter",
    faction: "Renegades",
    class: "Sniper",
    abilityName: "Decoy",
    abilityDescription: "-",
    medkitType: medkitTypes.Bandage,
  },
  {
    name: "Vi",
    faction: "Renegades",
    class: "Trooper",
    abilityName: "Shadow Step",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
    hasUniqueSkin: true,
    uniqueSkinName: "Motoko Kusanagi",
    uniqueSkinGifSrc: "../skins/unique_vi_gif.gif",
    uniqueSkinAbilityImage: "../skins/unique_vi_ability.png",
    uniqueSkinExtraInfo:
      "This skin was obtainable only during limited-time collaboration with Ghost in the Shell: SAC_2045 (June 2026)",
  },
  {
    name: "Tess",
    faction: "Skytech Megacorp",
    class: "Trooper",
    abilityName: "Ball Lightning",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Slayer",
    faction: "Force and Arms",
    class: "Sniper",
    abilityName: "Thermal Vision",
    abilityDescription: "-",
    medkitType: medkitTypes.Bandage,
  },
  {
    name: "Stalker",
    faction: "Renegades",
    class: "Trooper",
    abilityName: "Invisibility",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Sparkle",
    faction: "PYRO",
    class: "Enforcer",
    abilityName: "Grenade",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamRecovery,
  },
  {
    name: "Smog",
    faction: "PYRO",
    class: "Gunner",
    abilityName: "Rocket",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
  },
  {
    name: "Shenji",
    faction: "PYRO",
    class: "Enforcer",
    abilityName: "Fire Hunter",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamRecovery,
  },

  {
    name: "Satoshi",
    faction: "Skytech Megacorp",
    class: "Trooper",
    abilityName: "Force Field",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Raven",
    faction: "Force and Arms",
    class: "Scout",
    abilityName: "Scan",
    abilityDescription:
      "Reveals the location of enemies withing range, increases weapon damage against revealed heroes",
    medkitType: medkitTypes.Stim,
  },
  {
    name: "Molly",
    faction: "Force and Arms",
    class: "Enforcer",
    abilityName: "Burrow",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamRecovery,
  },
  {
    name: "Mirage",
    faction: "Renegades",
    class: "Sniper",
    abilityName: "Breakaway",
    abilityDescription: "-",
    medkitType: medkitTypes.Bandage,
  },
  {
    name: "Leviathan",
    faction: "Skytech Megacorp",
    class: "Gunner",
    abilityName: "Turret",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
  },
  {
    name: "Levi",
    faction: "Force and Arms",
    class: "Trooper",
    abilityName: "Thermal Vision",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Kwon",
    faction: "Renegades",
    class: "Gunner",
    abilityName: "Hook",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
  },
  {
    name: "Hurricane",
    faction: "Skytech Megacorp",
    class: "Enforcer",
    abilityName: "Shield",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamRecovery,
  },
  {
    name: "Graviel",
    faction: "Force and Arms",
    class: "Trooper",
    abilityName: "Gravity Grenade",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Ghost",
    faction: "Renegades",
    class: "Scout",
    abilityName: "Invisibility",
    abilityDescription: "-",
    medkitType: medkitTypes.Stim,
  },
  {
    name: "Freddie",
    faction: "PYRO",
    class: "Scout",
    abilityName: "Grenade",
    abilityDescription: "-",
    medkitType: medkitTypes.Stim,
  },
  {
    name: "Firefly",
    faction: "PYRO",
    class: "Sniper",
    abilityName: "Grenade",
    abilityDescription: "-",
    medkitType: medkitTypes.Bandage,
  },
  {
    name: "Dragoon",
    faction: "Renegades",
    class: "Gunner",
    abilityName: "Blink",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
  },
  {
    name: "Doc",
    faction: "PYRO",
    class: "Trooper",
    abilityName: "Rocket",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamHealing,
  },
  {
    name: "Cyclops",
    faction: "Force and Arms",
    class: "Enforcer",
    abilityName: "Scan",
    abilityDescription:
      "Reveals the location of enemies withing range, increases weapon damage against revealed heroes",
    medkitType: medkitTypes.TeamRecovery,
  },
  {
    name: "Blot",
    faction: "Skytech Megacorp",
    class: "Sniper",
    abilityName: "Force Field",
    abilityDescription: "-",
    medkitType: medkitTypes.Bandage,
  },
  {
    name: "Blizzard",
    faction: "Skytech Megacorp",
    class: "Sniper",
    abilityName: "Freezing Mine",
    abilityDescription: "-",
    medkitType: medkitTypes.Bandage,
  },
  {
    name: "Bertha",
    faction: "Force and Arms",
    class: "Gunner",
    abilityName: "Supression",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
  },
  {
    name: "Bastion",
    faction: "Skytech Megacorp",
    class: "Gunner",
    abilityName: "Shield",
    abilityDescription: "-",
    medkitType: medkitTypes.BattleKit,
  },
  {
    name: "Angel",
    faction: "Skytech Megacorp",
    class: "Scout",
    abilityName: "Shield",
    abilityDescription: "-",
    medkitType: medkitTypes.Stim,
  },
  {
    name: "Arnie",
    faction: "Renegades",
    class: "Enforcer",
    abilityName: "Blink",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamRecovery,
  },
  {
    name: "Scratch",
    faction: "Skytech Megacorp",
    class: "Enforcer",
    abilityName: "Throwing Shield",
    abilityDescription: "-",
    medkitType: medkitTypes.TeamRecovery,
  },
];
export const newestHeroName = "Flynt";

heroes.sort((a, b) => {
  const aNew = a.name === newestHeroName;
  const bNew = b.name === newestHeroName;

  if (aNew !== bNew) {
    return bNew - aNew;
  }

  return a.name.localeCompare(b.name);
});

const articlesContainer = document.querySelector("#hero-articles-container");
const CMS_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cmrkl6g0n00c707wg6463avuw/master";

const heroesCardsContainer = document.querySelector("#content-cards");
const heroFilterWrapper = document.querySelector("#hero-filter-wrapper");

let classFilter = "";
let factionFilter = "";
let heroNameFilter = "";

const factionFilterText = document.querySelector("#faction-text");
const classFilterText = document.querySelector("#class-text");

function setClassFilter(filter) {
  classFilter = filter;
  generateHeroesCards();
  classFilterText.innerHTML = `Class: ${classFilter}`;
}
function setFactionFilter(filter) {
  factionFilter = filter;
  generateHeroesCards();
  factionFilterText.innerHTML = `Faction: ${factionFilter}`;
}

const classFilterDetails = document.querySelector(
  "#hero-filter-class-dropdown",
);
const factionFilterDetails = document.querySelector(
  "#hero-filter-faction-dropdown",
);

const searchHeroInput = document.querySelector("#search-hero-input");
if (searchHeroInput)
  searchHeroInput.addEventListener("input", (e) => {
    heroNameFilter = searchHeroInput.value.trim();
    generateHeroesCards();
  });

function generateHeroesCards() {
  if (!heroesCardsContainer) return;

  heroesCardsContainer.innerHTML = "";

  let filteredHeroes = heroes;
  if (classFilter !== "")
    filteredHeroes = filteredHeroes.filter(
      (h) => h.class.toLocaleLowerCase() === classFilter.toLowerCase(),
    );
  if (factionFilter !== "")
    filteredHeroes = filteredHeroes.filter(
      (h) =>
        h.faction.toLocaleLowerCase() === factionFilter.toLocaleLowerCase(),
    );
  if (heroNameFilter !== "")
    filteredHeroes = filteredHeroes.filter((h) =>
      h.name.toLocaleLowerCase().includes(heroNameFilter.toLocaleLowerCase()),
    );

  filteredHeroes.forEach((hero) => {
    const heroCard = document.createElement("div");
    heroCard.className = "content-card";
    if (newestHeroName === hero.name) heroCard.classList.add("new-hero");

    heroCard.addEventListener("click", () => {
      window.location.href = `index.html?hero=${hero.name.toLowerCase()}`;
    });

    heroCard.innerHTML = `
    <div class="new-hero-tag">NEW</div> 
        <div class="content-card-badge">
          <img src="../classes/${hero.class.toLowerCase()}.webp" alt="${hero.class}-icon">
        </div>
        <div class="unique-skin-star ${hero.hasUniqueSkin ? "" : "hidden"}" title="Unique Skin"></div>
          <img src="../skins/${hero.name.toLowerCase()}.png" alt="${hero.name}-card" class="content-image hero-content-image zoom">
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
        

        <div class="left-column">
          <div class="badges-row">
            <div class="hexagon-glow-wrap left">
              <div class="hexagon"></div>
              <div class="hexagon-text">
                <img
                  src="../classes/${hero.class.toLowerCase()}.webp"
                  alt="${hero.class}-icon"
                  class="smaller"
                />
              </div>
            </div>
            
            <div class="hexagon-glow-wrap right">
              <div class="hexagon"></div>
              <div class="hexagon-text">
                <img
                  src="../factions/${hero.faction.toLowerCase()}.webp"
                  alt="${hero.faction}-icon"
                  class="bigger"
                />
              </div>
            </div>
          </div>
         
          <div class="sci-fi-frame">
            <div class="inner-content">
              
              <div class="skill-section">
                <span class="skill-title">Ability: ${hero.abilityName}</span>
                <p class="small-paragraph">${hero.abilityDescription}</p>
              </div>

              <div class="skill-section">
                <span class="skill-title">Medkit: ${hero.medkitType.name}</span>
                <p class="small-paragraph">${hero.medkitType.description}</p>
              </div>

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

  const backToHeroesButton = document.querySelector("#back-to-heroes-button");
  const goToArticleButton = document.querySelector(
    "#go-to-hero-article-button",
  );

  const heroArticleHeader = document.querySelector("#hero-article-header");

  if (!heroParam) {
    backToHeroesButton.classList.add("hidden");
    goToArticleButton.classList.add("hidden");
    heroArticleHeader.innerHTML = ``;

    if (cardsContainer) cardsContainer.classList.remove("hidden");
    if (heroContentContainer) heroContentContainer.innerHTML = ``;
    if (heroFilterWrapper) heroFilterWrapper.classList.remove("hidden");
    return;
  } else {
    backToHeroesButton.classList.remove("hidden");
    goToArticleButton.classList.remove("hidden");
    heroArticleHeader.innerHTML = `${heroParam.toUpperCase()} tips and tricks`;
  }

  cardsContainer.classList.add("hidden");
  heroFilterWrapper.classList.add("hidden");

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

          ${
            hero.uniqueSkinExtraInfo
              ? `<div class="cyber-card card-cyan">
              <div class="cyber-card-indicator"></div>
              <p><span class="info-icon"><img src="../images/info_icon.png" /></span>
                ${hero.uniqueSkinExtraInfo}
              </p>
            </div>`
              : ""
          }

        <div class="cyber-badge-row">
          <div class="cyber-icon-frame frame-cyan">
            <img src="../classes/${hero.class.toLowerCase()}.webp" alt="${hero.class}" />
            <div class="frame-corner"></div>
          </div>
          <div class="cyber-icon-frame frame-magenta">
            <img src="../factions/${hero.faction.toLowerCase()}.webp" alt="${hero.faction}" />
            <div class="frame-corner"></div>
          </div>
        </div>
      </div>

              <div class="cyber-badge-row">
                <div class="cyber-icon-frame frame-cyan">
                  <img src="../classes/${hero.class.toLowerCase()}.webp" alt="${hero.class}" />
                  <div class="frame-corner"></div>
                </div>
                <div class="cyber-icon-frame frame-magenta">
                  <img src="../factions/${hero.faction.toLowerCase()}.webp" alt="${hero.faction}" />
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

  articlesContainer.innerHTML = ``;
  getAllArticles(currentHero);
})();

async function getAllArticles(currentHero) {
  const query = `
    query GetArticles {
      posts {
        slug
      }
    }
  `;

  try {
    const data = await queryCMS(query);

    if (!data || !data.posts || data.posts.length === 0) {
      console.log("No articles found.");
      articlesContainer.innerHTML += /*html*/ `<p>This hero doesn't have an article <u>YET</u></p>`;
      return;
    }

    let count = 0;
    data.posts.forEach((article) => {
      if (article.slug.includes(currentHero.name.toLowerCase())) {
        showArticle(article.slug);
        count++;
      }
    });
    if (count === 0)
      articlesContainer.innerHTML += /*html*/ `<p>This hero doesn't have an article <u>YET</u></p>`;
  } catch (error) {
    console.error("Error downloading articles:", error);
  }
}

async function queryCMS(query, variables = {}) {
  const response = await fetch(CMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await response.json();
  return json.data;
}

async function showArticle(searchedSlug) {
  const query = `
    query GetPost($slug: String!) {
      post(where: {slug: $slug}) {
        title
        mdContent
        author
      }
    }
  `;

  try {
    const data = await queryCMS(query, { slug: searchedSlug });

    if (!data || !data.post) {
      console.log(`Article "${searchedSlug}" not found.`);
      articlesContainer.innerHTML = "<h2>Error 404: Article not found.</h2>";
      return;
    }
    articlesContainer.innerHTML += `
      <span class="article-author">by ${data.post?.author}</span>
      <article>${marked.parse(data.post.mdContent)}</article>
    `;
  } catch (error) {
    console.error("Downloading error:", error);
    articlesContainer.innerHTML = "Couldn't load content.";
  }
}
window.setClassFilter = setClassFilter;
window.setFactionFilter = setFactionFilter;
