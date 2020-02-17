module.exports = {
    title: "EYABC",
    description: "Today I Learned",
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-plantuml'))
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            {
                text: 'Development',
                items: [
                    { text: 'JavaScript', link: '/development/JavaScript/index'},
                    { text: 'React', link: '/development/react/index'},
                    { text: 'Vue', link: '/development/vue/makeVueBlog'},
                    { text: 'Tools', link: '/development/Tools/index'},
                    { text: 'Style', link: '/development/Style/index'},
                    { text: 'Term', link: '/development/Term/index'}
                ]
            }
        ],
        sidebar: 'auto'

    },
    base: '/TIL/'
};