import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


import {i18n} from './i18n'

function $t(key) {
    return i18n.t(key)
}

const store = new Vuex.Store({
    state: {
        numero: 10,
        drawer: false,
        search: "",
        page: "",
        flat: "",
        idBusiness: "",

        links: [
            {title: "home", icon: 'mdi-home', route: "home"},
            {title: "about", icon: 'mdi-account-question', route: "about"},
            {title: "services", icon: 'mdi-railroad-light', route: "services"},
            {title: "blog", icon: 'mdi-chat-question', route: "blog"},
            {title: "frequent_questions", icon: 'mdi-chat-question', route: "frequent-questions"},
            // {title: "Galería", icon: 'mdi-play-box-multiple', route: "gallery"},
            {title: "contact", icon: 'mdi-card-account-phone', route: "contact"},
        ],
        linksWithAuth: [
            {route: "dashboard", icon: 'mdi-view-dashboard', title: "Dashboard"},
        ]
    },
    getters: {
        getDrawer(state) {
            return state.drawer;
        },
        getIdBusiness(state) {
            return state.idBusiness;
        },
        getSearch(state) {
            return state.search;
        },
        getPage(state) {
            return state.page;
        },
        getFlat(state) {
            return state.flat;
        }
    },
    mutations: {
        setDrawer(state, v) {
            state.drawer = v;
        },
        setIdBusiness(state, v) {
            state.idBusiness = v;
        },
        setSearch(state, v) {
            state.search = v;
        },
        setPage(state, v) {
            state.page = v;
        },
        setFlat(state, v) {
            state.flat = v;
        },
        aumentarNum(state) {
            state.numero++;
        }

    },
});

export default store;
