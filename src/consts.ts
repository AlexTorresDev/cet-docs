export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '',
		alt: '',
	},
	twitter: '',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Spanish: 'es',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/AlexTorresDev/cet-docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'dev-cet',
	appId: '5J85USWA0U',
	apiKey: '4ff1a98bfe2815f5735328e88c4fe621',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'First steps': [
			{ text: 'Introducción', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
	es: {
		'Primeros pasos': [
			{ text: 'Introducción', link: 'es/introduction' },
			{ text: 'Página 2', link: 'es/page-2' },
			{ text: 'Página 3', link: 'es/page-3' },
		],
		'Otra sección': [{ text: 'Página 4', link: 'es/page-4' }],
	},
};

export const TOP_NAVIGATION = {
	en: [
		{ text: 'Docs', link: '/en/' },
		{ text: 'Community', link: COMMUNITY_INVITE_URL },
	],
	es: [
		{ text: 'Docs', link: '/en/' },
		{ text: 'Comunidad', link: COMMUNITY_INVITE_URL },
	],
};
