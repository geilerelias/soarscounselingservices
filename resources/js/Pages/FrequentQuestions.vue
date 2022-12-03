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
        <section>
            <v-sheet class=" theme--light">
                <v-container class=" py-4 py-lg-8">
                    <v-responsive class="mx-auto text-center" style="max-width: 1200px;">

                        <h2 class="text-h3 text-lg-h2">
                            Frequently Asked
                            Questions
                        </h2>

                        <div class="my-4 secondary mx-auto" style="width: 80px; height: 4px;"></div>

                        <div class="text-h6 text-lg-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam
                            nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!
                        </div>

                    </v-responsive>
                    <v-row class="row mt-6">
                        <v-col class="col-lg-6 col-12">
                            <div class="text-h5 font-weight-bold"> What happened to the developer who couldn't access
                                git?
                            </div>
                            <div class="text-h6 secondary--text mt-2"> He now has commitement issues.</div>
                        </v-col>
                        <v-col class="col-lg-6 col-12">
                            <div class="text-h5 font-weight-bold"> What do computers and air conditioners have in
                                common?
                            </div>
                            <div class="text-h6 secondary--text mt-2"> They both become useless when you open window.
                            </div>
                        </v-col>
                        <v-col class="col-lg-6 col-12">
                            <div class="text-h5 font-weight-bold"> How do you tell an introvert developer from and
                                extrovert developer?
                            </div>
                            <div class="text-h6 secondary--text mt-2"> An extrovert developer looks at your shoes when
                                he talks to you.
                            </div>
                        </v-col>
                        <v-col class="col-lg-6 col-12">
                            <div class="text-h5 font-weight-bold"> What is the programmers's favourite hangout place?
                            </div>
                            <div class="text-h6 secondary--text mt-2"> Foo Bar</div>
                        </v-col>
                        <v-col class="col-lg-6 col-12">
                            <div class="text-h5 font-weight-bold"> Why do Python developers need glasses?</div>
                            <div class="text-h6 secondary--text mt-2"> Because they don't C#.</div>
                        </v-col>
                        <v-col class="col-lg-6 col-12">
                            <div class="text-h5 font-weight-bold"> What's the object-oriented way to become wealthy?
                            </div>
                            <div class="text-h6 secondary--text mt-2"> Inheritance</div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
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
