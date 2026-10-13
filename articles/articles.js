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
            thumbnail
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
      console.log(article);

      const html = /*html*/ `
        <div class="article-preview">
          <div class="article-content">
            <h2>${article.articleTitle}</h2>
            <p>${article.author}</p>
            <a href="./article?slug=${article.slug}">Read</a>
          </div>
          <div class="article-image">
            <img src="${article.}" alt="${article.slug}">
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
