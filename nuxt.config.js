export default {
    head: {
        title: 'rest-countries-frontend',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css',
                integrity:
                    'sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=',
                crossorigin: 'anonymous',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap',
            },
        ],
        /*
        <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet">
        */
    },

    css: ['~assets/variables.scss'],

    styleResources: {
        scss: ['./assets/*.scss'],
    },

    plugins: ['@/plugins/click-outside.ts'],

    components: true,

    buildModules: ['@nuxt/typescript-build'],

    modules: ['@nuxtjs/apollo', '@nuxtjs/style-resources'],

    build: {},

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'localhost:4000',
            },
        },
    },
};
