import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);


import en from '../locales/en.json'
import es from '../locales/es.json'

export const i18n = new VueI18n({
    locale: import.meta.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        es,
        en
    }
})


