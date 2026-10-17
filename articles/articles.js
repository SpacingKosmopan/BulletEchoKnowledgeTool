import { queryCMS } from "../CMS/index.js";

const commonArticlesContainer = document.querySelector(
  "#common-articles-container",
);

async function getAllArticles() {
  if (!commonArticlesContainer) {
    console.error("No common articles container found");
    return;
  }

  commonArticlesContainer.innerHTML = ``;

  const query = `
    query MyQuery {
        articles {
            id
            markdownContent
            articleTitle
            author
            slug
            thumbnail {
              url
            }
            shortDescription
            updatedAt
          }
        }
  `;

  try {
    const data = await queryCMS(query);

    if (!data || !data.articles || data.articles.length === 0) {
      console.log("No articles found.");
      return;
    }

    data.articles.forEach((article) => {
      //console.log(article);

      const updatedAt = article.updatedAt
        ? new Date(article.updatedAt)
            .toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(",", "")
            .toUpperCase()
        : "UNKNOWN";

      const html = /*html*/ `
        <div class="article-preview">
          <div class="article-content">
            <h2>${article.articleTitle}</h2>

            <p class="article-short-description">
              ${article.shortDescription || ""}
            </p>

            <p class="article-author">${article.author || "Unknown author"}</p>

            <p class="article-updated">
              <span class="article-updated-label">LAST UPDATED //</span>
              <time datetime="${article.updatedAt || ""}">${updatedAt}</time>
            </p>

            <a href="./article/?slug=${article.slug}">Read</a>
          </div>

          <div class="article-image">
            <img
              src="${article.thumbnail.url}"
              alt="${article.articleTitle}"
              loading="lazy"
            >
          </div>
        </div>
      `;

      commonArticlesContainer.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.error("Error downloading articles:", error);
  }
}

(async () => {
  getAllArticles();
})();
