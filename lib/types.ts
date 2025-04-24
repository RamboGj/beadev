export interface ArticleAdProps {
	sys: { id: string };
	title: string;
	slug: string;
	subtitle: string;
	publishedAt: Date;
	updatedAt: Date;
	categories: string[];
	cover: {
		url: string;
	};
}

export interface ArticleProps extends ArticleAdProps {
	content: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		json: any;
		links: {
			assets: {
				block: {
					sys: {
						id: string;
					};
					url: string;
					description: string;
				};
			};
		};
	};
}
