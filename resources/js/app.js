import './bootstrap';

//material icons
import "@mdi/font/css/materialdesignicons.css";

//estilos
import '../css/app.css';

//raíz de vue
import Vue from 'vue';


//inertia
import {createInertiaApp, Head, Link} from '@inertiajs/vue2'


//vuetify
import vuetify from '../plugins/vuetify'

//Ziggy Vue
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import {Ziggy} from './ziggy';
// import {Ziggy, ZiggyVue, route} from 'ziggy';

//material design icons
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


//store
import store from "../plugins/store";

import {i18n} from '@/../plugins/i18n'

const app = document.getElementById('app');

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    progress: {
        color: '#29d',
    },
    title: (title) => `${title} ${title !== '' ? '-' : ''} ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        Vue.use(plugin)
        Vue.use(i18n)
        Vue.use(ZiggyVue, Ziggy)
        Vue.component('InertiaHead', Head)
        Vue.component('InertiaLink', Link)
        new Vue({
            vuetify,
            store,
            i18n,
            render: h => h(App, props),
        }).$mount(el)
    },
});
