<template>
    <app-layout>
        <inertia-head :title="$t('links.services')"></inertia-head>
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
                                        {{ $t('links.services') }}
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

                        <v-hover v-slot="{ hover }">
                            <v-card class="pa-0 "
                                    style="transition: all 0.5s;"
                                    :class="hover ? 'mt-n5 mb-5 elevation-12' : ''">
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
                                <v-card-text class="text-justify" v-html="item.description">
                                </v-card-text>
                                <v-card-actions v-if="item.resources">
                                    <v-subheader>
                                        Resources
                                    </v-subheader>
                                    <a class="text-caption"
                                       target="_blank"
                                       :href="item.resources"
                                       v-html="item.resources">
                                    </a>
                                </v-card-actions>
                            </v-card>

                        </v-hover>

                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!--        <section>
                    <v-sheet class=" theme&#45;&#45;light">
                        <v-container class=" py-4 py-lg-8">
                            <v-row class="row">

                                <v-col v-for="item in services" :key="item.id" class="col-md-4 col-12">
                                    <v-hover v-slot="{ hover }">
                                        <v-card outlined class="" style="transition: all 0.5s;"
                                                :class="hover ? 'mt-n5 mb-5 elevation-12' : ''">
                                            <v-img :src="item.src"
                                                   style="height: 280px;transition: all 0.5s;"
                                                   cover
                                                   :aspect-ratio="16/9"
                                                   :class="hover ? 'zoom' : ''">
                                                <template v-slot:placeholder>
                                                    <v-row
                                                        class="fill-height ma-0"
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <v-progress-circular
                                                            indeterminate
                                                            color="grey lighten-5"
                                                        ></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>

                                            <v-responsive class="mx-auto text-center pa-4" style="max-width: 360px;">
                                                <div class="text-h5 mt-5">{{ item.name }}</div>
                                                <div class="text-h6 mt-5 text-justify">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis
                                                    reprehenderit ullam minima quaerat sit!
                                                </div>

                                            </v-responsive>
                                        </v-card>
                                    </v-hover>
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-sheet>
                </section>-->

        <section>
            <v-container class="py-4 py-lg-8">
                <div class="text-center">
                    <div class="text-uppercase overline primary--text ">
                        {{ $t('services.apply_now') }}
                    </div>
                    <h1 class="text-h6 text-lg-h5 text-uppercase font-weight-black mb-2 text-center">
                        {{ $t('services.cost_per_session') }}
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
                            {{ $t('services.individual') }}
                        </div>
                        <div class="d-flex justify-center">
                            <div class="font-weight-bold text-h5">$</div>
                            <div class="text-h2">
                                85
                            </div>
                        </div>
                        <div class="my-6 text-h6">
                            <div class="my-1">
                                {{ $t("services.per_session") }}.
                            </div>
                        </div>
                        <v-btn outlined block x-large class="mt-10">
                            {{ $t("services.apply_for") }}
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
                        <div class="text-h4 font-weight-black mb-6">{{ $t("services.group") }}</div>
                        <div class="d-flex justify-center">
                            <div class="font-weight-bold text-h5">$</div>
                            <div class="text-h2">50</div>
                        </div>
                        <div class="my-6 text-h6">
                            {{ $t("services.per_session") }}.
                        </div>
                        <v-btn outlined dark block x-large
                               class="mt-10 accent">
                            {{ $t("services.apply_for") }}
                        </v-btn>
                    </v-card>

                </v-card>
            </v-container>
        </section>

        <section>
            <v-container>
                <div class="text-center">
                    <h1 class="text-h6 text-lg-h5 text-uppercase font-weight-black mb-2 text-center">
                        {{ $t("services.pay_by") }}
                    </h1>
                    <v-divider class="primary mx-auto mb-2  theme--light" style="max-width: 28px;"></v-divider>
                </div>

                <v-sheet>
                    <v-container class="text-center">

                        <div class="my-4">
                            <v-row dense>
                                <v-col v-for="item in payBy" :key="item.id"
                                       class="col-md-4 col-6 text-center d-flex justify-space-around">
                                    <a href="#">
                                        <v-sheet class="grey lighten-4 text-center rounded-lg"
                                                 style="max-width:120px;width:120px">
                                            <v-img class="mx-auto" style="width:96px; height: 96px;" :src="item.icon">
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
                                            </v-img>
                                            <p class="primary--text font-weight-bold">
                                                {{ $t(`services.${item.name}`) }}
                                            </p>
                                        </v-sheet>
                                    </a>
                                </v-col>

                            </v-row>
                        </div>
                    </v-container>
                </v-sheet>

            </v-container>
        </section>
    </app-layout>

</template>

<script>
import appLayout from "@/Layouts/AppLayout.vue";

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
                name: " Assessment and Treatment of Problematic Sexual Behaviors",
                description: 'SOARS provides Psychosocial Risk Factor assessments for adolescents who are involved with the legal system and for those who are not.  The assessment will provide clear recommendations for treatment and supervision.  SOARS staff can help navigate the teenager and his family through the legal system by interaction with the courts and attorneys.  SOARS can also provide treatment for problematic sexual behaviors.',
                src: bg4
            }, {
                name: "Specialized Training",
                description: 'Clinical supervision and training provided',
                src: bg1
            },
            {
                name: "Cognitively-Based Compassion Training ",
                description: ` CBCT (Cognitively-Based Compassion Training) is a system of contemplative exercises designed to strengthen and sustain compassion. Practices include training in attentional stability and increased emotional awareness, as well as targeted analytical reflections to understand better one’s relationship with self and others. The reflective exercises seek critical insights into the way one’s mindsets and attitudes can be shifted to support personal resiliency, to foster an inclusive and more accurate understanding of others, and ultimately to intensify altruistic motivation. With practice, informed compassion can become a spontaneous response that permeates one’s life.`,
                src: bg2,
                resources: 'https://compassion.emory.edu/cbct-compassion-training/index.html'
            },
            {
                name: "Dialectical Behavior Therapy",
                description: `Dialectical behavior therapy (DBT) is a type of talk therapy (psychotherapy). It’s based on Cognitive Behavior Therapy (CBT), but it’s specially adapted for people who experience emotions very intensely. <br>
                Cognitive behavioral therapy (CBT) is a type of talk therapy that helps people understand how thoughts affect emotions and behaviors. <br>
                “Dialectical” means combining opposite ideas. DBT focuses on helping people accept the reality of their lives and their behaviors, as well as helping them learn to change their lives, including their unhelpful behaviors. <br>
                Dialectical behavior therapy was developed in the 1970s by Marsha Linehan, an American psychologist.`,
                src: bg3,
                resources: 'https://dialecticalbehaviortherapy.com/'

            },

            {
                name: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) ",
                description: `TF-CBT is an evidence-based treatment approach shown to help children, adolescents, and their parents (or other caregivers) overcome trauma-related difficulties. It is designed to reduce negative emotional and behavioral responses following trauma, including child sexual abuse and other maltreatment, domestic violence, traumatic loss, mass disasters, multiple traumas, and other traumatic events`,
                src: bg5,
                resource: 'https://tfcbt.org/wp-content/uploads/2014/07/camh_502.pdf'

            },

            {
                name: "Anger Management",
                description: `12 week individual or group classes <br>
                Anger management refers to a process. It can help people identify stressors. People learn steps to help them stay calm in anger management. They may then handle tense situations in a constructive, positive way. The purpose of anger management is to help a person decrease anger. It reduces the emotional and physical arousal that anger can cause. It is generally impossible to avoid all people and settings that incite anger. But a person may learn to control reactions and respond in a socially appropriate manner.`,
                src: bg7
            },
            {
                name: "Social Skills",
                description: `12 week individual or group classes <br>
                It can be tough out there in the social world. Not all kids naturally know the ins and outs of making and keeping friends, communicating effectively or navigating complex social situations. It’s similar to not being a natural at math or spelling. Some “subjects” come easily to some, and some “subjects” need extra attention, practice and training.`,
                src: bg8
            },
        ],
        payBy: [
            {
                name: "cash",
                icon: 'https://img.icons8.com/fluency/96/null/cash--v1.png'
            },
            {
                name: "check",
                icon: 'https://img.icons8.com/fluency/96/null/paycheque.png'
            },
            {
                name: "paypal",
                icon: 'https://img.icons8.com/fluency/96/null/paypal.png'
            },
            {
                name: "cash_app",
                icon: 'https://img.icons8.com/fluency/96/null/cash-app--v3.png'
            },
            {
                name: "venmo",
                icon: 'https://img.icons8.com/ultraviolet/96/null/venmo.png'
            },
            {
                name: "zelle",
                icon: 'https://img.icons8.com/color/96/null/zelle.png'
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
