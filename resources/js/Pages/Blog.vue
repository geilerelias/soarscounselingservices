<template>
    <app-layout>
        <section id="about" style="transform-origin: center top 0px;">
            <v-row class="no-gutters">
                <v-col class="col col-12">
                    <section id="hero-alt">
                        <v-img height="225"
                               gradient="to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)"
                               :src="bg"
                               max-width="100%"
                               style="max-width: 100%;">

                            <v-row class="ma-0 fill-height text-center align-center justify-center">
                                <v-col class="col col-12">
                                    <h1
                                        class="text-h3 font-weight-500 mb-2 text-center white--text">
                                        Blog
                                    </h1>
                                    <v-responsive class="primary mx-auto mb-6"
                                                  style="max-width: 28px;">
                                        <v-divider aria-orientation="horizontal"/>
                                    </v-responsive>

                                    <v-breadcrumbs dark class="justify-center pa-0 text--primary "
                                                   :items="breadcrumbs"
                                    ></v-breadcrumbs>
                                </v-col>
                            </v-row>

                        </v-img>
                    </section>
                </v-col>
            </v-row>
        </section>

        <section>
            <div class="v-responsive mx-auto" style="max-width: 1280px;">
                <div class="v-responsive__content">
                    <div class="container">
                        <div tabs="All,Nature,Cities,Branding,Design">
                            <div class="text-center pa-3">
                                <button type="button"
                                        class="v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-view-grid theme--light"></i></span>
                                </button>
                            </div><!----></div>
                        <div class="row">
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/237/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Nature </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">Something I need to
                                            tell you
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">September 18, 2018</div>
                                            <div>That female isn't midst divide kind upon seas lights greater green
                                                creature lights brought.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/238/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Cities </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">Here's a Simple
                                            Trick
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">September 5, 2018</div>
                                            <div>The spirit over midst fruit forth fish under beginning to multiply
                                                thing female green land.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/239/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Nature </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">The History of
                                            Nature
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">August 27, 2018</div>
                                            <div>Third is fly. From one under in itself two waters, all own. Said male
                                                shall greater own grass.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/240/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Design </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">Why you should Always
                                            First
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">August 14, 2018</div>
                                            <div>Lights give have herb. First. Seed lesser his a fruit. Stars good
                                                divide fish appear don't, third deep.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/241/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Design </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">Ten things about
                                            Photography
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">August 14, 2018</div>
                                            <div>Be forth, god for rule face abundantly all our two winged made. Is
                                                whose morning female.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/242/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Branding </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">Are you doing the
                                            Right Way?
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">August 14, 2018</div>
                                            <div>Which all, morning isn't. Female and own living dry, and morning lesser
                                                first he stars under years thing.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/243/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Branding </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">The History of
                                            Branding
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">June 26, 2018</div>
                                            <div>Life and. Be light, him second signs his midst place you're open also
                                                fish grass yielding, very their it so.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/244/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Nature </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">Five things about
                                            nature
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">June 26, 2018</div>
                                            <div>Be forth, god for rule face abundantly all our two winged made. Is
                                                whose morning female.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-md-4 col-12">
                                <div class="v-card v-sheet theme--light">
                                    <div class="v-image v-responsive theme--light" style="height: 200px;">
                                        <div class="v-responsive__sizer" style="padding-bottom: 50%;"></div>
                                        <div class="v-image__image v-image__image--cover"
                                             style="background-image: url(&quot;https://picsum.photos/id/232/400/200&quot;); background-position: center center;"></div>
                                        <div class="v-responsive__content" style="width: 400px;"><a href="/blog-post"
                                                                                                    class="">
                                            <div
                                                class="v-overlay align-end pa-3 justify-start v-overlay--absolute v-overlay--active theme--dark"
                                                style="z-index: 5;">
                                                <div class="v-overlay__scrim black" style="opacity: 0.2;"></div>
                                                <div class="v-overlay__content">
                                                    <button type="button"
                                                            class="v-btn v-btn--contained theme--dark v-size--small"
                                                            style="background-color: rgb(37, 37, 37); border-color: rgb(37, 37, 37);">
                                                        <span class="v-btn__content"> Cities </span></button>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div class="px-3 pb-4">
                                        <div class="v-card__title headline font-weight-bold mb-2">My Favorite Place on
                                            earth is...
                                        </div>
                                        <div class="v-card__text body-1 grey--text text-darken-2">
                                            <div class="mb-4">June 21, 2018</div>
                                            <div>There hath can't rule open fruitful every, our under gathering
                                                replenish and. Unto it fill him.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </app-layout>
</template>

<script>
import appLayout from "@/Layouts/AppLayout";
import bg from '@/../images/free/pexels-shvets-production-7176298.jpg'

export default {
    name: "Blog",
    components: {
        appLayout
    },
    data: () => ({
        bg,
        breadcrumbs: [
            {
                text: 'Home',
                disabled: false,
                href: '/',
            },
            {
                text: 'Blog',
                disabled: true,
                href: '#',
            },
        ]
    })
}
</script>

<style scoped>

</style>
