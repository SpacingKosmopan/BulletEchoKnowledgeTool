const heroes = [
  { name: "Alice", faction: "Renegades", class: "Scout" },
  { name: "Angel", faction: "Skytech Megacorp", class: "Scout" },
  { name: "Arnie", faction: "Renegades", class: "Enforcer" },
  { name: "Bastion", faction: "Skytech Megacorp", class: "Gunner" },
];
heroes.sort((a, b) => a.name.localeCompare(b.name));

function generateHeroesCards() {
  const heroesCardsContainer = document.querySelector("#content-cards");
  heroesCardsContainer.innerHTML = "";
  heroes.forEach((hero) => {
    const heroCard = document.createElement("div");
    heroCard.className = "content-card";
    heroCard.addEventListener("click", () => {
      // * TODO: Change location
      window.location.href = "heroes/index.html";
    });
    heroCard.innerHTML = `
        <img src="skins/${hero.name.toLocaleLowerCase()}.png" alt="${hero.name}-card">
        <div class="content-card-name">${hero.name}</div>
        `;
    heroesCardsContainer.appendChild(heroCard);
  });
}
generateHeroesCards();

function generateAsideHeroesPagesLinks() {
  const heroesPages = document.querySelector("#heroes-pages");
  heroesPages.innerHTML = "";
  heroes.forEach((hero) => {
    heroesPages.innerHTML += `<a href="heroes/index.html">${hero.name}</a>`;
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
