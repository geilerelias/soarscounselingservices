<template>
    <div>
        <v-fade-transition>
            <v-system-bar
                style="transition: all 0.3s;"
                color="primary"
                absolute
                v-show="$vuetify.breakpoint.smAndUp && flat"
                :class="$vuetify.breakpoint.mdAndUp ? 'px-200' : 'px-6'"
                height="30"
            >
                <v-spacer></v-spacer>

                <div class="d-flex justify-center align-center white--text">
                    <v-btn icon text rounded href="tel:+14046441819">
                        <v-icon class="light-green--text">
                            mdi-phone-in-talk
                        </v-icon>
                    </v-btn>
                    <span
                    >Call us:
                    <span class="font-weight-bold">+1 404 644 1819</span></span
                    >
                </div>
            </v-system-bar>
        </v-fade-transition>
        <v-fade-transition>
            <v-app-bar
                style="transition: all 0.3s;"
                height="60"
                shrink-on-scroll
                :extended="$vuetify.breakpoint.mdAndUp && flat"
                app
                :class="$vuetify.breakpoint.smAndUp && flat ? 'mt-7' : ''"
                color="white lighten-3"
                :src="bgHeader"
            >

                <template v-slot:img="{ props }">
                    <v-img
                        v-bind="props"
                        gradient="to right top, rgb(255 255 255), rgb(255 255 255 / 80%)"
                    ></v-img>
                </template>
                <v-btn
                    v-if="!route().current('home')"
                    @click="back"
                    text
                    light
                    fab
                    class="mr-1"
                >
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-app-bar-title class="pa-0">
                    <div class=""
                         :style="flat &&$vuetify.breakpoint.mdAndUp?
                                'max-height: 80px;max-width: 400px;height: 80px;width: 400px;'
                                :'max-height: 40px;max-width: 200px;height: 40px;width: 200px;'">
                        <inertia-link :href="route('home')" class="h-full  pa-0">
                            <v-img
                                class=""
                                :style="flat && $vuetify.breakpoint.mdAndUp?
                                'max-height: 80px;max-width: 250px;height: 80px;width: 250px;'
                                :'max-height: 40px;max-width: 200px;height: 40px;width: 200px;'"
                                :spect-ratio="5/4"
                                contain
                                :src="logo"
                            />
                        </inertia-link>

                    </div>
                </v-app-bar-title>

                <v-spacer></v-spacer>

                <btn-language></btn-language>

                <!-- Settings Dropdown -->
                <div v-if="$page.props.user !== null" class="text-center hidden-xs-only">
                    <v-menu offset-y :close-on-content-click="false">
                        <!--                                <template v-slot:activator="{ on, attrs }">
                                                            <v-btn text
                                                                   v-bind="attrs"
                                                                   v-on="on"
                                                                   class="px-1 ml-2 mr-n2 rounded-pill">
                                                                <v-avatar class="transparent" size="35" v-if="$page.props.jetstream.managesProfilePhotos">
                                                                    <v-img cover :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name"></v-img>
                                                                </v-avatar>

                                                                <span
                                                                    class="text-none font-weight-regular ml-3 hidden-sm-and-down text-truncate"
                                                                    style="max-width: 100px;">{{ $page.props.user.name }}</span>
                                                                <v-icon>mdi-chevron-down</v-icon>
                                                            </v-btn>
                                                        </template> -->
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-if="$page.props.jetstream.managesProfilePhotos"
                                fab
                                dark
                                text
                                v-bind="attrs"
                                v-on="on"
                                large
                            >
                                <v-img
                                    style="max-height: 48px; max-width: 48px"
                                    class="rounded-circle"
                                    cover
                                    :src="$page.props.user.profile_photo_url"
                                    :alt="$page.props.user.name"
                                ></v-img>
                            </v-btn>
                        </template>

                        <v-card class="pa-5">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar
                                        v-if="$page.props.jetstream.managesProfilePhotos"
                                    >
                                        <img
                                            :src="$page.props.user.profile_photo_url"
                                            :alt="$page.props.user.name"
                                        />
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{
                                            $page.props.user.name
                                            }}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>{{
                                            $page.props.user.email
                                            }}
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <!-- Responsive Settings Options -->
                            <v-list v-if="$page.props.user !== null" dense>
                                <v-subheader>Settings Options</v-subheader>
                                <v-list-item-group color="primary">
                                    <inertia-link :href="route('profile.show')">
                                        <v-list-item
                                            :dark="route().current('profile.show')"
                                            :class="
                                            route().current('profile.show')
                                                ? 'active primary  white--text'
                                                : ''
                                        "
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-account-circle</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    Profile
                                                </v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                    </inertia-link>
                                    <inertia-link
                                        :href="route('api-tokens.index')"
                                        v-if="$page.props.jetstream.hasApiFeatures"
                                    >
                                        <v-list-item
                                            :dark="
                                            route().current('api-tokens.index')
                                        "
                                            :class="
                                            route().current('api-tokens.index')
                                                ? 'active primary  white--text'
                                                : ''
                                        "
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-lan</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    API Tokens
                                                </v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                    </inertia-link>
                                    <v-subheader>Manage Team</v-subheader>
                                    <inertia-link
                                        :href="
                                        route(
                                            'teams.show',
                                            $page.props.user.current_team
                                        )
                                    "
                                    >
                                        <v-list-item
                                            :dark="route().current('teams.show')"
                                            :class="
                                            route().current('teams.show')
                                                ? 'active primary  white--text'
                                                : ''
                                        "
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-account-group</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    Team Settings
                                                </v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                    </inertia-link>

                                    <inertia-link :href="route('teams.create')">
                                        <v-list-item
                                            :dark="route().current('teams.create')"
                                            :class="
                                            route().current('teams.create')
                                                ? 'active primary  white--text'
                                                : ''
                                        "
                                        >
                                            <v-list-item-icon>
                                                <v-icon
                                                >mdi-account-multiple-plus
                                                </v-icon
                                                >
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                >Create New
                                                    Team
                                                </v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                    </inertia-link>
                                </v-list-item-group>
                            </v-list>

                            <div
                                v-if="$page.props.user !== null"
                                class="pt-4 pb-1 border-t border-gray-200"
                            >
                                <div class="mt-3 space-y-1">
                                    <!-- Team Management -->
                                    <template
                                        v-if="$page.props.jetstream.hasTeamFeatures"
                                    >
                                        <!-- Team Switcher -->
                                        <div
                                            class="block px-4 py-2 text-xs text-gray-400"
                                        >
                                            Switch Teams
                                        </div>

                                        <template
                                            v-for="team in $page.props.user.all_teams"
                                        >
                                            <form
                                                @submit.prevent="switchToTeam(team)"
                                                :key="team.id"
                                            >
                                                <jet-responsive-nav-link
                                                    as="button"
                                                >
                                                    <div class="flex items-center">
                                                        <svg
                                                            v-if="
                                                            team.id ==
                                                                $page.props.user
                                                                    .current_team_id
                                                        "
                                                            class="mr-2 h-5 w-5 text-green-400"
                                                            fill="none"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            ></path>
                                                        </svg>
                                                        <div>{{ team.name }}</div>
                                                    </div>
                                                </jet-responsive-nav-link>
                                            </form>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </v-card>
                    </v-menu>
                </div>

                <!--
                                <div class="text-center" v-if="$page.props.user == null">
                                    <v-menu
                                        :close-on-content-click="false"
                                        :nudge-width="200"
                                        offset-y
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-app-bar-nav-icon
                                                v-bind="attrs"
                                                v-on="on"
                                                class="ml-2 hidden-sm-and-down"
                                            >
                                            </v-app-bar-nav-icon>
                                        </template>

                                        <v-card>
                                            <v-list>
                                                <template v-if="$page.props.user == null">
                                                    <v-subheader>Authentication</v-subheader>
                                                    <v-divider></v-divider>
                                                    <v-list-item
                                                        v-for="item in items"
                                                        :key="item.title"
                                                        :href="item.route"
                                                    >
                                                        <v-list-item-icon>
                                                            <v-icon>{{ item.icon }}</v-icon>
                                                        </v-list-item-icon>

                                                        <v-list-item-content>
                                                            <v-list-item-title>{{
                                                                    item.title
                                                                }}
                                                            </v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </template>
                                            </v-list>
                                        </v-card>
                                    </v-menu>
                                </div>
                -->

                <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                    @click="drawer ? setDrawer(false) : setDrawer(true)"
                ></v-app-bar-nav-icon>

                <template transition="scroll-y-transition"
                          v-if="$vuetify.breakpoint.mdAndUp && showExtendTolbar"
                          v-slot:extension
                >
                    <v-container
                        v-if="$vuetify.breakpoint.mdAndUp && showExtendTolbar"
                        class="py-0 d-none d-md-block fill-height"
                        transition="scale-transition"
                        style="transition: all 0.2s"
                    >
                        <v-divider color="white"></v-divider>

                        <v-toolbar-items
                            transition="scale-transition"
                            class="
                          d-flex
                          fill-height
                          justify-center justify-space-arrow
                          text-body-2 text-lg-body-1
                        "
                        >
                            <inertia-link
                                v-for="item in links"
                                :key="item.name"
                                :href="route(item.route)"
                                class="text-decoration-none text-none v-btn v-btn--text theme--light v-size--default"
                                :class="{
                                    'active primary--text  font-weight-bold':
                                    route().current(item.route) &&
                                    $vuetify.breakpoint.mdAndUp
                                }"
                                v-html="$t('links.'+item.title)"
                            >
                            </inertia-link>
                        </v-toolbar-items>
                    </v-container>
                </template>
            </v-app-bar>
        </v-fade-transition>
        <v-btn
            v-scroll="onScroll"
            bottom
            color="white"
            dark
            icon
            fab
            fixed
            right
            @click="sendMessage('+14046441819','Hello, welcome to soarscounselingservices')"
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="60" height="60" viewBox="0 0 100 100">
                <image id="Capa_1" data-name="Capa 1" x="8" y="8" width="84" height="85"
                       xlink:href="data:img/png;base64,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"/>
            </svg>
        </v-btn>
    </div>
</template>

<script>
import logo from "../../images/logo/SOARS.png";
import eslogan from "../../images/logo/img2.png";

import bgHeader from "../../images/pexels-brett-sayles-2310604.jpg";


import tiktok from "@/../images/btns/tiktok.png";
import whatsapp from "@/../images/btns/whatsapp.png";
import youtube from "@/../images/btns/youtube.png";
import tel from "@/../images/btns/tel.png";
import messenger from "@/../images/btns/messenger.png";
import llamada from "@/../images/btns/llamada.png";
import instagram from "@/../images/btns/instagram.png";
import gmail from "@/../images/btns/gmail.png";
import facebook from "@/../images/btns/facebook.png";

import {mapMutations, mapState} from "vuex";

import JetApplicationMark from "@/Jetstream/ApplicationMark.vue";
import JetDropdown from "@/Jetstream/Dropdown.vue";
import JetDropdownLink from "@/Jetstream/DropdownLink.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import BtnLanguage from "@/components/Language.vue";
import route from "ziggy-js/src/js";


export default {
    name: "Header",
    components: {
        JetApplicationMark,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        BtnLanguage
    },
    props: {
        seeker: {
            type: Boolean,
            default: true
        },
        app: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        tiktok: tiktok,
        whatsapp: whatsapp,
        youtube: youtube,
        tel: tel,
        messenger: messenger,
        llamada: llamada,
        instagram: instagram,
        gmail: gmail,
        facebook: facebook,
        bgHeader,
        topAnterior: 0,
        showExtendTolbar: true,
        fav: true,
        menu: false,
        dialog: false,
        message: false,
        hints: true,
        fab: false,
        flat: true,
        logo: logo,
        eslogan: eslogan,
        department: [],
        businesses: [],
        items: [
            {title: "Login", icon: "mdi-account-lock", route: "/login"},
            {title: "Sign Up", icon: "mdi-account-plus", route: "/register"}
        ],
        opciones: [
            {title: "Notificaciones", icon: "mdi-bell", route: ""},
            {title: "Seguidos", icon: "mdi-account-group", route: ""},
            {title: "Favoritos", icon: "mdi-heart", route: ""},
            {title: "Ubicación", icon: "mdi-map-marker", route: ""},
            {title: "Ajustes", icon: "mdi-cog", route: ""}
        ]
    }),
    computed: {
        ...mapState([
            "drawer",
            "search",
            "page",
            "color",
            "links",
            "idBusiness"
        ])
    },
    methods: {
        route,
        ...mapMutations(["setDrawer", "setSearch", "setPage", "setIdBusiness"]),
        toTop() {
            this.$vuetify.goTo(0);
        },
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;

            if (top > 50) {
                this.fab = true;
                this.flat = false;
                // console.log(top)
                if (top > this.topAnterior) {
                    this.topAnterior = top;
                    this.showExtendTolbar = false;
                } else {
                    this.showExtendTolbar = true;
                    this.topAnterior = top;
                }
            } else {
                this.fab = false;
                this.flat = true;
            }
        },
        switchToTeam(team) {
            this.$inertia.put(
                route("current-team.update"),
                {
                    team_id: team.id
                },
                {
                    preserveState: false
                }
            );
        },
        sendMessage(phone, text) {
            let apiLink = 'https://';
            apiLink += 'api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURI(text);
            window.open(apiLink, '_blank');
        },
        logout() {
            axios.post(route("logout").url()).then(response => {
                window.location = "/";
            });
        },
        back() {
            window.history.back();
            //return document.referrer;
        }
    }
};
</script>

<style>
.active {
    border-bottom: solid;
}

.px-20 {
    padding-left: 40px !important;
    padding-right: 40px !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
    opacity: 0;
}
</style>
