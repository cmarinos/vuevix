// config.js

module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'VueVix',
            description: 'Documentation site for the VueVix component library plugin'
        }
    },

    themeConfig: {
        repoLabel: 'Contribute!',
        repo: '',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    { text: 'Getting Started', link: '/guide' },
                    { text: 'Components', link: '/components/' },
                    { text: 'GitHub', link: 'https://github.com/cmarinos/vuevix' }
                ],
                sidebar: {
                    '/components/': [
                        {
                            title: 'Components',
                            collapsable: false,
                            children: [ 'input']
                        }
                    ]
                }
            }
        }
    }
};
