require('./bootstrap');

require('moment');

import Vue from 'vue';

import {InertiaApp} from '@inertiajs/inertia-vue';
import {InertiaForm} from 'laravel-jetstream';
import PortalVue from 'portal-vue';

//vuetify
import vuetify from '../plugins/vuetify'


//material design icons
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


//store
import store from "../plugins/store";


import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import {i18n} from '@/../plugins/i18n'

Vue.mixin({methods: {route}});
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);

const app = document.getElementById('app');

new Vue({
    vuetify,
    store,
    i18n,
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
