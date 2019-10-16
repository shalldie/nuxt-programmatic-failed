import path from 'path';
import { Configuration } from "@nuxt/types";
import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;

const nuxtConfig: Configuration = {

    mode: 'universal',

    server: {
        host,
        port
    },

    rootDir: __dirname,

    srcDir: path.join(__dirname, 'client'),

    /*
    ** Headers of the page
    */
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-touch-fullscreen', content: 'yes' },
            { name: 'format-detection', content: 'telephone=no,email=no' },
            { 'http-equiv': 'X-UA-Compatible' as any, content: 'ie=edge' } as any,
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: []
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#29d', height: '3px', throttle: 0 },

    /*
    ** Global CSS
    */
    css: [],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        ['@nuxt/typescript-build', {
            typeCheck: true,
            ignoreNotFoundWarnings: true
        }]
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/style-resources',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],

    styleResources: {
        scss: []
    },

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        port,
        host,
        browserBaseURL: '/'
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, { isDev, isClient }) {
        },

        extractCSS: true,

        additionalExtensions: ['ts']
    }
};

export default nuxtConfig;
