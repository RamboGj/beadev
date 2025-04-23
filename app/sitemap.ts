import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.beadev.com.br/",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			alternates: {
				languages: {
					en: "https://www.beadev.com.br/en-US",
					br: "https://www.beadev.com.br/pt-BR",
				},
			},
		},
	];
}
