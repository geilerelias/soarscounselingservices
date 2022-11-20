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
                                        Frequent questions
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
        <section style="height: 100vh">

        </section>
    </app-layout>
</template>

<script>
import bg from "@/../images/free/TERAPIA GRUPAL.jpg";
import appLayout from "@/Layouts/AppLayout";

export default {
    name: "FrequentQuestions",
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
                text: 'Frequent questions',
                disabled: true,
                href: '#',
            },
        ]
    })
}
</script>

<style scoped>

</style>
