import { queryCMS } from "../../CMS/index.js";

const commonArticleWraper = document.querySelector("#common-article-wrapper");

const urlParams = new URLSearchParams(window.location.search);
const articleSlug = urlParams.get("slug");

(async () => {
  getArticle(articleSlug);
})();

async function getArticle(slug) {
  if (!commonArticleWraper) {
    console.error("No common articles container found");
    return;
  }

  commonArticleWraper.innerHTML = ``;

  const query = `
    query MyQuery {
        article(where: {slug: "${slug}"}) {
            author
            updatedAt
            markdownContent
        }
    }
  `;

  try {
    const data = await queryCMS(query);

    console.log(data);

    if (!data) {
      console.log("Article not found.");
      commonArticleWraper.innerHTML = "<h2>Error 404: Article not found.</h2>";
      return;
    }

    const article = data.article;

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

    const parsedContent = marked.parse(article.markdownContent);

    const html = `${updatedAt} - ${parsedContent}`;

    commonArticleWraper.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.error("Error downloading articles:", error);
  }
}
