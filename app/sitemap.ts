import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const languages = ["pt-BR", "en-US"]; // Adicione mais idiomas conforme necessário

	return languages.flatMap((lang) => [
		{
			url: `https://www.beadev.com.br/${lang}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
			alternateRefs: languages
				.filter((l) => l !== lang)
				.map((l) => `https://www.beadev.com.br/${l}`),
		},
	]);
}
