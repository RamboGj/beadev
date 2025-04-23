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
