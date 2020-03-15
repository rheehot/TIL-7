const sidebar = require('./sidebar');

module.exports = {
	title: "EYABC",
	description: "Today I Learned",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Repository', link: 'https://github.com/eyabc/TIL/' },
		],
		sidebar,
		smoothScroll: true
	},
	base: '/TIL/',
	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-plantuml'))
			// md.use(require('markdown-it-underline'))
			// md.use(require('markdown-it-task-lists'))
		}
	},
	plugins: [
		['@vuepress/pwa', { serviveWorker: true, updatePopup: true }],
		['feed', { canonical_base: 'https://eyabc.github.io/TIL/' }],
		'@vuepress/google-analytics',
		{
			'ga': 'UA-113171398-2'
		}
	]
};