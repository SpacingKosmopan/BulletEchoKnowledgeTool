const CMS_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cmrkl6g0n00c707wg6463avuw/master";

export async function queryCMS(query, variables = {}) {
  const response = await fetch(CMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await response.json();
  return json.data;
}
