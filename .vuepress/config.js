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
                    { text: 'React', link: '/development/react/index'},
                    { text: 'Vue', link: '/development/vue/makeVueBlog'},
                    { text: 'Tools', link: '/development/Tools/index'}
                ]
            }
        ],
        sidebar: 'auto'

    },
    base: '/TIL/'
};