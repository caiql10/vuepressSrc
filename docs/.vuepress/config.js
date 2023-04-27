module.exports = {
    title: 'Cai\' blog', // 设置网站标题
    description: '记录、分享前端技术',
    base: '',
    // theme: '@vuepress/blog',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        serviceWorker: {
            updatePopup: false,
            // 如果设置为 true, 默认的文本配置将是: 
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        },
        // 简单起见，前三项菜单都引用外部链接
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: 'https://blog.wy310.cn/%e5%8d%9a%e5%ae%a2/' },
            { text: '关于我', link: '/about' }
        ],
        sidebar: [
            {
                title: 'js学习',
                // collapsable: false,
                children: [
                    '/js-study-link',
                    '/jsS-study-link'
                ],
                sidebarDepth: 2,
            },
            {
                title: 'jq学习',
                // collapsable: false,
                children: [
                    '/jq-study-link'
                ],
                sidebarDepth: 2,
            }
        ],

    },
    plugins: [
        ['@vuepress/back-to-top'],

    ]


}