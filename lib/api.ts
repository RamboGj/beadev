const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  subtitle
  publishedAt
  updatedAt
  categories
  cover {
    url
  }
`;

async function fetchGraphQL(query: string, preview = false) {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Switch the Bearer token depending on whether the fetch is supposed to retrieve live
				// Contentful content or draft content
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
			// Associate all fetches for articles with an "articles" cache tag so content can
			// be revalidated or updated from Contentful on publish
			next: { tags: ["articles"] },
			cache: "no-cache",
		},
	).then((response) => response.json());
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function extractArticleEntries(fetchResponse: any) {
	return fetchResponse?.data?.postCollection?.items;
}

export async function getAllArticles({
	limit = 10,
	isDraftMode = false,
	locale = "en-US",
}: {
	limit?: number;
	isDraftMode?: boolean;
	locale?: string;
}) {
	const articles = await fetchGraphQL(
		`query {
        postCollection(where:{slug_exists: true}, limit: ${limit}, locale: "${locale}") {
            items {
                ${ARTICLE_GRAPHQL_FIELDS}
            }
        }
      }`,
		isDraftMode,
	);

	return extractArticleEntries(articles);
}

export async function getArticleAd({
	slug,
	isDraftMode = false,
	locale = "en-US",
}: { slug: string; isDraftMode?: boolean; locale?: string }) {
	const article = await fetchGraphQL(
		`query {
        postCollection(where:{slug: "${slug}"}, limit: 1, locale: "${locale}", preview: ${
					isDraftMode ? "true" : "false"
				}) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
		isDraftMode,
	);
	return extractArticleEntries(article)[0];
}

export async function getArticle({
	slug,
	isDraftMode = false,
	locale = "en-US",
}: { slug: string; isDraftMode?: boolean; locale?: string }) {
	const article = await fetchGraphQL(
		`query {
        postCollection(where:{slug: "${slug}"}, limit: 1, locale: "${locale}", preview: ${
					isDraftMode ? "true" : "false"
				}) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS},
			content {
				json
				links {
					assets {
						block {
							sys {
								id
							}
							url
							description
						}
					}
		  }}
          }
        }
      }`,
		isDraftMode,
	);
	return extractArticleEntries(article)[0];
}
