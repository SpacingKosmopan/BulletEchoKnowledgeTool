import { heroes, newestHeroName } from "./heroes/heroes.js";
heroes.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  const target = newestHeroName.toLowerCase();

  if (nameA === target) return -1;
  if (nameB === target) return 1;

  return nameA.localeCompare(nameB);
});

function generateAsideHeroesPagesLinks() {
  const heroesPages = document.querySelector("#heroes-pages");
  heroesPages.innerHTML = "";
  heroes.forEach((hero) => {
    heroesPages.innerHTML += `<stripe-button href="heroes/index.html?hero=${hero.name}" ${newestHeroName.toLowerCase() === hero.name.toLowerCase() ? "is-new" : "color='#0066BB'"}>${hero.name}</stripe-button>`;
  });
}
generateAsideHeroesPagesLinks();

//

document.querySelector("#minigames-text").addEventListener("click", () => {
  window.location.href = "./minigames/index.html";
});

document.querySelector("#heroes-text").addEventListener("click", () => {
  window.location.href = "./heroes/index.html";
});

document.querySelector("#calculators-text").addEventListener("click", () => {
  window.location.href = "./calculators/index.html";
});
