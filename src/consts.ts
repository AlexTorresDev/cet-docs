export const SITE = {
	title: 'CET Docs',
	description: 'Your website description.',
	defaultLanguage: 'en',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	'English': 'en',
	'Español': 'es',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/AlexTorresDev/cet-docs/tree/main`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { icon?: string, text: string; link: string, tag?: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Header': [
			{
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>',
				text: 'Get Started',
				link: 'en/docs/get-started'
			},
			/* 			{ text: 'Page 2', link: 'en/docs/page-2' },
						{ text: 'Page 3', link: 'en/docs/page-3' }, */
		],
		/* 		'Another Section': [{ text: 'Page 4', link: 'en/docs/page-4' }], */
	},
	es: {
		'Header': [
			{
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>',
				text: 'Empezando',
				link: 'es/docs/get-started'
			},
			/* { text: 'Pagina 2', link: 'es/docs/page-2' },
			{ text: 'Pagina 3', link: 'es/docs/page-3' }, */
		],
		/* 'Otra seccion': [{ text: 'Pagina 4', link: 'es/docs/page-4' }], */
	},
};

export const MENUS: Sidebar = {
	en: {
		'Navbar': [
			{ text: 'Theme', link: '' },
		],
		'Right-Sidebar': [
			{ text: 'On this page', link: '' },
			{ text: 'Edit this page', link: '' }
		]
	},
	es: {
		'Navbar': [
			{ text: 'Tema', link: '' },
		],
		'Right-Sidebar': [
			{ text: 'En esta página', link: '' },
			{ text: 'Editar esta página', link: '' }
		]
	},
}


export const themes = [
	"light",
	"dark",
	"cupcake",
	"bumblebee",
	"emerald",
	"corporate",
	"synthwave",
	"retro",
	"cyberpunk",
	"valentine",
	"halloween",
	"garden",
	"forest",
	"aqua",
	"lofi",
	"pastel",
	"fantasy",
	"wireframe",
	"black",
	"luxury",
	"dracula",
	"cmyk",
	"autumn",
	"business",
	"acid",
	"lemonade",
	"night",
	"coffee",
	"winter",
]