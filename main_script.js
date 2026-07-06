const heroes = [
  { name: "Alice", faction: "Renegades", class: "Scout" },
  { name: "Angel", faction: "Skytech Megacorp", class: "Scout" },
  { name: "Arnie", faction: "Renegades", class: "Enforcer" },
  { name: "Bastion", faction: "Skytech Megacorp", class: "Gunner" },
];
heroes.sort((a, b) => a.name.localeCompare(b.name));

function generateAsideHeroesPagesLinks() {
  const heroesPages = document.querySelector("#heroes-pages");
  heroesPages.innerHTML = "";
  heroes.forEach((hero) => {
    heroesPages.innerHTML += `<stripe-button href="heroes/index.html?hero=${hero.name}" color="#0066BB">${hero.name}</stripe-button>`;
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
