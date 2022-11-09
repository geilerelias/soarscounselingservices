import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

// Translation provided by Vuetify (javascript)
import en from 'vuetify/lib/locale/en'
import es from 'vuetify/lib/locale/es'

const opts = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: '#28a0b6',
                secondary: '#389db7',
                accent: '#c0c955',
                error: '#f44336',
                warning: '#ffc107',
                info: '#03a9f4',
                success: '#8bc34a'
            },
            dark: {
                primary: '#2b65ae',
                secondary: '#c45911',
                accent: '#82B1FF',
                error: '#f44336',
                warning: '#ff9800',
                info: '#00bcd4',
                success: '#4caf50',
            },
        },
    },
    lang: {
        locales: { en, es },
        current: 'es',
    },


}

export default new Vuetify(opts)
