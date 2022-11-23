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
                               style=" max-width: 100%;">

                            <v-row class="ma-0 fill-height text-center align-center justify-center">
                                <v-col class="col col-12">
                                    <h1
                                        class="text-h3 font-weight-500 mb-2 text-center white--text">
                                        Services
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
            <v-container class="py-12">
                <v-row>
                    <v-col class="col-sm-6 col-md-4 col-lg-4 col-12"
                           v-for="(item,i) in services" :key="item.id">
                        <inertia-link href="#"
                                      class="text-decoration-none">
                            <v-hover v-slot="{ hover }">
                                <v-card class="pa-0">
                                    <v-img cover
                                           :aspect-ratio="1/1"
                                           style="transition: all 0.5s;"
                                           :class="hover ? 'zoom' : ''"
                                           gradient="rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65), rgb(0, 0, 0)"
                                           :src="item.src">
                                        <template v-slot:placeholder>
                                            <v-row
                                                class="fill-height ma-0"
                                                align="center"
                                                justify="center"
                                            >
                                                <v-progress-circular
                                                    indeterminate
                                                    color="primary"
                                                ></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-container class="fill-height d-flex justify-center align-end">
                                            <p class="font-weight-bold accent--text text-h6">{{ item.name }}</p>
                                        </v-container>
                                    </v-img>
                                </v-card>

                            </v-hover>
                        </inertia-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!--        <section>-->
        <!--            <v-sheet class=" theme&#45;&#45;light">-->
        <!--                <v-container class=" py-4 py-lg-8">-->
        <!--                    <v-row class="row">-->

        <!--                        <v-col v-for="item in services" :key="item.id" class="col-md-4 col-12">-->
        <!--                            <v-card outlined class="">-->
        <!--                                <v-img :src="item.src" cover style="height: 280px;">-->
        <!--                                    <template v-slot:placeholder>-->
        <!--                                        <v-row-->
        <!--                                            class="fill-height ma-0"-->
        <!--                                            align="center"-->
        <!--                                            justify="center"-->
        <!--                                        >-->
        <!--                                            <v-progress-circular-->
        <!--                                                indeterminate-->
        <!--                                                color="grey lighten-5"-->
        <!--                                            ></v-progress-circular>-->
        <!--                                        </v-row>-->
        <!--                                    </template>-->
        <!--                                </v-img>-->

        <!--                                <v-responsive class="mx-auto text-center pa-4" style="max-width: 360px;">-->
        <!--                                    <div class="text-h5 mt-5">{{ item.name }}</div>-->
        <!--                                    <div class="text-h6 mt-5 text-justify">-->
        <!--                                        Lorem ipsum dolor sit amet consectetur adipisicing-->
        <!--                                        elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis-->
        <!--                                        reprehenderit ullam minima quaerat sit!-->
        <!--                                    </div>-->

        <!--                                </v-responsive>-->
        <!--                            </v-card>-->
        <!--                        </v-col>-->

        <!--                    </v-row>-->
        <!--                </v-container>-->
        <!--            </v-sheet>-->
        <!--        </section>-->

        <section>
            <v-container class="py-4 py-lg-8">
                <div class="text-center">
                    <div class="text-uppercase overline primary--text ">
                        apply now
                    </div>
                    <h1 class="text-h6 text-lg-h5 text-uppercase font-weight-black mb-2 text-center">
                        Cost per session
                    </h1>
                    <v-divider class="primary mx-auto mb-2  theme--light" style="max-width: 28px;"></v-divider>
                </div>
                <v-card flat class="mt-8 d-flex justify-center flex-column flex-md-row  pt-8 mb-6">

                    <v-card class="text-center text-body-1 mx-auto pa-4" style="max-width: 300px;width: 300px;">
                        <div class="mb-2">
                            <v-icon
                                class="text-h1 black--text">
                                mdi-account
                            </v-icon>
                        </div>
                        <div class="text-h4 font-weight-black mb-6">
                            Individual
                        </div>
                        <div class="d-flex justify-center">
                            <div class="font-weight-bold text-h5">$</div>
                            <div class="text-h2">
                                95
                            </div>
                        </div>
                        <div class="my-6 text-h6">
                            <div class="my-1">
                                per session.
                            </div>
                        </div>
                        <v-btn outlined block x-large class="mt-10">
                            apply for
                        </v-btn>
                    </v-card>

                    <v-card dark style="max-width: 300px;width: 300px;"
                            class="text-center text-body-1 mx-auto pa-4 secondary darken-1 pt-8 mt-8 mt-md-n4 ">
                        <div class="mb-2">
                            <v-icon
                                class="text-h1  white--text">
                                mdi-account-group
                            </v-icon>
                        </div>
                        <div class="text-h4 font-weight-black mb-6">Group</div>
                        <div class="d-flex justify-center">
                            <div class="font-weight-bold text-h5">$</div>
                            <div class="text-h2">50</div>
                        </div>
                        <div class="my-6 text-h6">
                            per session.
                        </div>
                        <v-btn outlined dark block x-large
                               class="mt-10 accent">
                            apply for
                        </v-btn>
                    </v-card>

                </v-card>
            </v-container>
        </section>
    </app-layout>

</template>

<script>
import appLayout from "@/Layouts/AppLayout";

import bg from '@/../images/free/pexels-kampus-production-5940841.jpg'

import bg1 from '@/../images/free/pexels-shvets-production-7176298.jpg'
import bg2 from '@/../images/free/AYUDA.jpg'
import bg3 from '@/../images/free/ADOLESCENTE.jpg'
import bg4 from '@/../images/free/pexels-liza-summer-6382659.jpg'
import bg5 from '@/../images/free/TERAPIA FAMILIAR EXCELENTE.jpg'
import bg6 from '@/../images/free/TERAPIA FAMILIAR.jpg'
import bg7 from '@/../images/free/TERAPIA GRUPAL.jpg'
import bg8 from '@/../images/free/pexels-cottonbro-4100489.jpg'
import bg9 from '@/../images/free/ADOLESCENTE 4.jpg'

export default {
    name: "Services",
    components: {
        appLayout
    },
    data: () => ({
        bg,
        services: [
            {
                name: "Specialized Training and Issues",
                src: bg1
            },
            {
                name: "Compassion Based Cognitive Behavioral Therapy",
                src: bg2
            },
            {
                name: "Dialectical Behavior Therapy",
                src: bg3
            },
            {
                name: "Assessment and Treatment of Problematic Sexual Behaviors (and interacting with the courts)",
                src: bg4
            },
            {
                name: "Trauma Focused Cognitive Behavior Therapy",
                src: bg5
            },
            {
                name: "Sexual Abuse Survivors",
                src: bg6
            },
            {
                name: "Anger Management",
                src: bg7
            },
            {
                name: "Social Skills",
                src: bg8
            },
            {
                name: "Anxiety Management",
                src: bg9
            }

        ],
        breadcrumbs: [
            {
                text: 'Home',
                disabled: false,
                href: '/',
            },
            {
                text: 'Services',
                disabled: true,
                href: '#',
            },
        ]
    })
}
</script>

<style>
.theme--light.v-breadcrumbs .v-breadcrumbs__divider, .theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
    color: white !important;
}

.v-skeleton-loader__image {
    height: 300px;
}

/*zoom en imagenes*/
.v-image .v-image__image {
    transition: all 0.6s;
}

.v-image.zoom .v-image__image {
    transform: scale(1.2);
}
</style>
