<template>
    <!--    <v-navigation-drawer v-model="localDrawer" app temporary>
              <template v-if="$page.props.user!==null" v-slot:prepend>
                  <v-list-item two-line>
                      <v-list-item-avatar>
                          <img :src="$page.props.user.profile_photo_url"
                               :alt="$page.props.user.name">
                      </v-list-item-avatar>

                      <v-list-item-content>
                          <v-list-item-title>{{ $page.props.user.name }}</v-list-item-title>
                          <v-list-item-subtitle>{{ $page.props.user.email }}</v-list-item-subtitle>
                      </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
              </template>

              <div class="d-flex pa-2 align-center">
                  <v-img contain :src="logo" alt="logo"></v-img>
              </div>
              <v-divider></v-divider>
              <v-list dense>
                  <v-list-item-group
                      v-model="group"
                      active-class="primary text&#45;&#45;accent-4"
                  >
                      <inertia-link v-for="item in links"
                                    :key="item.title"
                                    :href="route(item.route)">
                          <v-list-item
                              :dark="route().current(item.route)"
                              :class="route().current(item.route)?'active primary  white&#45;&#45;text':''"
                          >
                              <v-list-item-icon>
                                  <v-icon>{{ item.icon }}</v-icon>
                              </v-list-item-icon>

                              <v-list-item-content>
                                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>
                      </inertia-link>

                      <template v-if="$page.props.user==null">

                          <v-divider></v-divider>
                          <v-subheader>Authentication</v-subheader>
                          <v-list-item
                              v-for="item in items"
                              :key="item.title"
                              :href="item.route"
                          >
                              <v-list-item-icon>
                                  <v-icon>{{ item.icon }}</v-icon>
                              </v-list-item-icon>

                              <v-list-item-content>
                                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>

                      </template>

                      &lt;!&ndash; Responsive Settings Options &ndash;&gt;
                      <template v-if="$page.props.user!==null" dense>


                          <inertia-link v-for="item in linksWithAuth" :key="item.id"
                                        :href="route(item.route)">
                              <v-list-item
                                  :dark="route().current(item.route)"
                                  :class="route().current(item.route)?'active primary  white&#45;&#45;text':''"
                              >
                                  <v-list-item-icon>
                                      <v-icon v-text="item.icon"></v-icon>
                                  </v-list-item-icon>

                                  <v-list-item-content>
                                      <v-list-item-title v-text="item.title"></v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item>
                          </inertia-link>

                          <v-divider></v-divider>
                          <v-subheader>Settings Options</v-subheader>

                          <inertia-link :href="route('profile.show')">
                              <v-list-item
                                  :dark="route().current('profile.show')"
                                  :class="route().current('profile.show')?'active primary  white&#45;&#45;text':''">
                                  <v-list-item-icon>
                                      <v-icon>mdi-account-circle</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                      <v-list-item-title> Profile</v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item>
                          </inertia-link>
                          <inertia-link :href="route('api-tokens.index')"
                                        v-if="$page.props.jetstream.hasApiFeatures">
                              <v-list-item
                                  :dark="route().current('api-tokens.index')"
                                  :class="route().current('api-tokens.index')?'active primary  white&#45;&#45;text':''"
                              >
                                  <v-list-item-icon>
                                      <v-icon>mdi-lan</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                      <v-list-item-title> API Tokens</v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item>
                          </inertia-link>

                          <v-subheader>Authentication</v-subheader>

                          <v-list-item @click="logout">
                              <v-list-item-icon>
                                  <v-icon>mdi-logout</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                  <v-list-item-title> Logout</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>


                          <v-subheader>Manage Team</v-subheader>
                          <inertia-link :href="route('teams.show', $page.props.user.current_team)">
                              <v-list-item
                                  :dark="route().current('teams.show')"
                                  :class="route().current('teams.show')?'active primary  white&#45;&#45;text':''"
                              >
                                  <v-list-item-icon>
                                      <v-icon>mdi-account-group</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                      <v-list-item-title> Team Settings</v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item>
                          </inertia-link>

                          <inertia-link :href="route('teams.create')">
                              <v-list-item
                                  :dark="route().current('teams.create')"
                                  :class="route().current('teams.create')?'active primary  white&#45;&#45;text':''"
                              >
                                  <v-list-item-icon>
                                      <v-icon>mdi-account-multiple-plus</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                      <v-list-item-title>Create New Team</v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item>
                          </inertia-link>
                      </template>
                  </v-list-item-group>
              </v-list>
              <div v-if="$page.props.user!==null" class="pt-4 pb-1 border-t border-gray-200">

                  <div class="mt-3 space-y-1">

                      &lt;!&ndash; Team Management &ndash;&gt;
                      <template v-if="$page.props.jetstream.hasTeamFeatures">

                          &lt;!&ndash; Team Switcher &ndash;&gt;
                          <div class="block px-4 py-2 text-xs text-gray-400">
                              Switch Teams
                          </div>

                          <template v-for="team in $page.props.user.all_teams">
                              <form @submit.prevent="switchToTeam(team)" :key="team.id">
                                  <jet-responsive-nav-link as="button">
                                      <div class="flex items-center">
                                          <svg v-if="team.id == $page.props.user.current_team_id"
                                               class="mr-2 h-5 w-5 text-green-400" fill="none"
                                               stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                               stroke="currentColor" viewBox="0 0 24 24">
                                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                          </svg>
                                          <div>{{ team.name }}</div>
                                      </div>
                                  </jet-responsive-nav-link>
                              </form>
                          </template>
                      </template>
                  </div>
              </div>

    </v-navigation-drawer>-->
    <v-navigation-drawer v-model="localDrawer" app temporary>
        <!--        v-model="localDrawer"
                fullscreen
                hide-overlay
                transition="dialog-top-transition"
                scrollable
            >-->

        <v-card flat>
            <v-toolbar flat light style="max-height: 60px !important;" class="h-10" color="transparent">
                <v-btn icon light @click="localDrawer = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>

                <inertia-link
                    :href="route('home')"
                    class="d-flex flex-column align-center text-decoration-none mr-2 router-link-exact-active router-link-active"
                    aria-current="page">

                    <v-img style="max-width:100px;width:90px;" contain
                           :src="logo"/>

                    <v-img max-width="150" style="max-height:40px" contain :src="eslogan"/>

                </inertia-link>


                <v-spacer></v-spacer>
                <v-menu bottom right offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn light icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar>
            <v-divider></v-divider>

            <v-img
                style="width:260px;max-width:260px;"
                :aspect-ratio="16/9"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                :src="ImgEamonn"
                alt="eamon">
                <v-container class="mt-10 d-flex justify-end align-content-end">
                    <v-row>
                        <v-col class="col-md-6 col-lg-7 col-12">
                            <h1 class="white--text text-h5   mt-xl-4 font-weight-bold font-weight-bold">
                                Eamonn Walsh, LCSW
                            </h1>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>


            <!-- menu anterior-->
            <v-list dense shaped>
                <v-list-item-group
                    v-model="group"
                    active-class="primary text--accent-4"
                >
                    <inertia-link v-for="item in links"
                                  :key="item.title"
                                  :href="route(item.route)"
                                  class="text-decoration-none">
                        <v-list-item
                            :dark="route().current(item.route)"
                            :class="route().current(item.route)?'active primary  white&#45;&#45;text':''"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </inertia-link>


                    <!--Responsive Settings Options -->
                    <template v-if="$page.props.user!==null" dense>


                        <inertia-link v-for="item in linksWithAuth" :key="item.id"
                                      :href="route(item.route)"
                                      class="text-decoration-none">
                            <v-list-item
                                :dark="route().current(item.route)"
                                :class="route().current(item.route)?'active primary  white&#45;&#45;text':''"
                            >
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </inertia-link>

                        <v-divider></v-divider>
                        <v-subheader>Settings Options</v-subheader>

                        <inertia-link class="text-decoration-none" :href="route('profile.show')">
                            <v-list-item
                                :dark="route().current('profile.show')"
                                :class="route().current('profile.show')?'active primary  white&#45;&#45;text':''">
                                <v-list-item-icon>
                                    <v-icon>mdi-account-circle</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title> Profile</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </inertia-link>
                        <inertia-link class="text-decoration-none" :href="route('api-tokens.index')"
                                      v-if="$page.props.jetstream.hasApiFeatures">
                            <v-list-item
                                :dark="route().current('api-tokens.index')"
                                :class="route().current('api-tokens.index')?'active primary  white&#45;&#45;text':''"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-lan</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title> API Tokens</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </inertia-link>

                        <v-subheader>Authentication</v-subheader>

                        <v-list-item @click="logout">
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title> Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>


                        <v-subheader>Manage Team</v-subheader>
                        <inertia-link class="text-decoration-none"
                                      :href="route('teams.show', $page.props.user.current_team)">
                            <v-list-item
                                :dark="route().current('teams.show')"
                                :class="route().current('teams.show')?'active primary  white&#45;&#45;text':''"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-account-group</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title> Team Settings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </inertia-link>

                        <inertia-link class="text-decoration-none" :href="route('teams.create')">
                            <v-list-item
                                :dark="route().current('teams.create')"
                                :class="route().current('teams.create')?'active primary  white&#45;&#45;text':''"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-account-multiple-plus</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Create New Team</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </inertia-link>
                    </template>
                </v-list-item-group>
            </v-list>

        </v-card>
    </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import logo from "../../images/logo/img1.png";
import eslogan from "../../images/logo/img2.png";
import ImgEamonn from '@/../images/eamonn.jpg'


import JetApplicationMark from "@/Jetstream/ApplicationMark.vue";
import JetDropdown from "@/Jetstream/Dropdown.vue";
import JetDropdownLink from "@/Jetstream/DropdownLink.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";

export default {
    name: "Drawer",
    components: {
        JetApplicationMark,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink
    },
    data: () => ({
        ImgEamonn,
        dialog: false,
        group: null,
        logo: logo,
        eslogan: eslogan,
        opciones: [
            {title: "Notificaciones", icon: "mdi-bell", route: ""},
            {title: "Seguidos", icon: "mdi-account-group", route: ""},
            {title: "Favoritos", icon: "mdi-heart", route: ""},
            {title: "Ubicación", icon: "mdi-map-marker", route: ""},
            {title: "Ajustes", icon: "mdi-cog", route: ""}
        ],
        items: [
            {title: "Login", icon: "mdi-account-lock", route: "/login"},
            {title: "Sign Up", icon: "mdi-account-plus", route: "/register"}
        ],
        right: null,
        notifications: false,
        sound: true,
        widgets: false,
        select: [
            {text: "State 1"},
            {text: "State 2"},
            {text: "State 3"},
            {text: "State 4"},
            {text: "State 5"},
            {text: "State 6"},
            {text: "State 7"}
        ]
    }),
    created() {
        // axios
        //     .get(`/business/user/all`)
        //     .then(response => {
        //         this.businesses = response.data;
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    },
    watch: {
        group() {
            this.drawer ? this.setDrawer(false) : this.setDrawer(true);
        }
    },
    computed: {
        ...mapState(["drawer", "page", "color", "flat", "links", "linksWithAuth"]),
        localDrawer: {
            get() {
                return this.drawer;
            },
            set(val) {
                this.setDrawer(val);
            }
        }
    },
    methods: {
        ...mapMutations([
            "setDrawer",
            "setPage",
            "setColor",
            "setFlat",
            "setPagePrincipal"
        ]),

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

        logout() {
            axios.post(route("logout").url()).then(response => {
                window.location = "/";
            });
        }
    }
};
</script>

<style>
</style>
