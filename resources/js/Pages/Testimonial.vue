<template>
    <app-layout>
        <inertia-head :title="$t('links.testimonial')"></inertia-head>
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
                                        {{ $t('links.testimonial') }}
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


        <v-sheet light class="transparent">
            <v-container class="py-4 py-lg-8">
                <div class="text-center">
                    <div class="text-uppercase overline primary--text ">
                        {{ $t("home.testimonials") }}
                    </div>
                    <h1 class="text-h6 text-lg-h5 text-uppercase font-weight-black mb-2 text-center">
                        {{ $t('home.what_our_customers_are_saying') }}
                    </h1>
                    <v-divider class="primary mx-auto mb-2  theme--light" style="max-width: 28px;"></v-divider>

                </div>
                <v-row class=" mt-6">
                    <v-col v-for="item in testimonials" :key="item.id" class="col-sm-6 col-lg-3 col-12">
                        <v-card flat light>
                            <v-card-title class="">
                                <v-sheet
                                    class="d-flex align-start justify-center mx-auto text-h1 white--text mt-n6 position-relative accent"
                                    style="height: 48px; width: 60px; border-radius: 100%;">
                                    <div class="position-absolute" style="top: 16px;">“</div>
                                </v-sheet>
                            </v-card-title>
                            <div class="pa-3">
                                <div class="text-h6 secondary--text">
                                    {{ item.content }}
                                </div>
                                <div class="d-flex align-center mt-4">
                                    <div class="mr-2">
                                        <v-avatar dark size="50" color="primary">
                                            <v-icon dark>
                                                mdi-account
                                            </v-icon>
                                        </v-avatar>
                                    </div>
                                    <div class="text-left">
                                        <div class="text-h6">{{ item.person }}</div>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

    </app-layout>
</template>

<script>
import appLayout from "@/Layouts/AppLayout.vue";
import bg from '@/../images/testimonial.jpg'

export default {
    name: "Testimonial",
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
                text: 'Testimonial',
                disabled: true,
                href: '#',
            },
        ],
        testimonials: [
            {
                content: `Eamonn Walsh provides effective interventions for adolescent sex offenders and children with sexual behavior problems that are court involved.  By offering a safe place,  treatment opportunities are possible and participants are able to learn appropriate and responsible social and sexual behavior to substitute for the inappropriate and irresponsible behavior. Participants are taught to identify and interrupt thier sexual abuse cycle and through psycho-education modules, behavior techniques and empathy training participants are offered the opportunity to learn that sexually abusive behavior is manageable and controllable`,
                person: 'Chief Probation Officer'
            }, {
                content: `My child has participated in the SOARS program headed up by Mr. Walsh with great results.  Mr. Walsh helped give tools to my child which have been very valuable, that have helped them identify wrong and faulty thinking patterns ultimately replacing them with healthy ones.  Mr. Walsh as a wealth of experience and knowledge, but is also very kind and compassionate.  I am so grateful that Mr. Walsh has been an influence and am grateful that my child’s situation is better because of the SOARS program.`,
                person: 'Participant Parent'
            }, {
                content: `I’ve participated in the SOARS program and found it to be very helpful.  Mr. Walsh was able to help me think about things in a better way, which has really changed my outlook and relationships.  He also took time to work with my attorneys and probation officer given I’d made some mistakes that had consequences.  I am glad to have gotten counseling from him`,
                person: 'From Participant'
            }, {
                content: `"My name is Stacy Levy and I have been a  defense attorney for over 27 years.  In my practice I have worked with many different therapists  to help my clients with  extremely delicate mental health issues.   Eamonn Walsh is one of the most extraordinary therapists I have ever had the opportunity to work with.   His kindness is only outweighed by his intellect.   He understands that treating the client often includes working closely with the family and always goes above and beyond in his approach to the well being of his patients. Eamonn is a credit to his profession and his clients are lucky to have him in their corner!"`,
                person: 'Stacy Levy'
            }, {
                content: `Eamonn is an incredible person. He takes time to get to know those he works with and seems to have an incredible way of being able to hear people out. He somehow stuck his hand out to save me when I didn't think anyone could`,
                person: 'From participant'
            }, {
                content: `I truly believe Eamonn helped save my son’s life. He helped my teenager at a time when I was unsure if anyone could. My son is now on his way to college and working at Chick-fil-A. I’m beyond grateful to Eamonn.`,
                person: 'From parent'
            },
        ]
    })
}
</script>

<style scoped>

</style>
