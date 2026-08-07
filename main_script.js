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

// * NEWS SECTION UPDATE * //
const CMS_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cmrkl6g0n00c707wg6463avuw/master";

async function queryCMS(query, variables = {}) {
  const response = await fetch(CMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await response.json();
  return json.data;
}

const newsContainer = document.querySelector("#news");
newsContainer.innerHTML = ``;

async function getAllNews() {
  if (!newsContainer) {
    console.error("No news container found.");
    return;
  }

  const query = `
    query GetAllNews {
      allNews {
        content
        title
        displayImageLink
        displayImage {
          url
        }
      }
    }
  `;

  try {
    const data = await queryCMS(query);

    if (!data) {
      console.log(`Article not found.`);
      return;
    }


    data.allNews.forEach((news) => {
      const imageHTML = news.displayImageLink
        ? /*html*/ `<a href="${news.displayImageLink}" target="_blank"
            ><img
              src="${news.displayImage.url}"
              alt="news image content"
              class="news-box-image"
          /></a>`
        : /*html*/ `<img
            src="${news.displayImage.url}"
            alt="news image content"
            class="news-box-image"
          />`;

      const newsHTML = /*html*/ `<div class="news-box">
        <div class="new-box-info">
          <span class="news-tag">🔥 News</span>
          <h2>${news.title}</h2>
          <p>${news.content || ""}</p>
        </div>
        ${imageHTML}
      </div>`;

      newsContainer.insertAdjacentHTML("beforeend", newsHTML);
    });
  } catch (error) {
    console.error("Downloading error:", error);
  }
}

getAllNews();
