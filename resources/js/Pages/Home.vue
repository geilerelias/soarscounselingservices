<template>
    <app-layout>
        <v-img cover
               :src="bg1"
               class="white--text"
               gradient="rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgb(0 0 0 / 33%), rgb(0 0 0 / 70%)"
               style="height:calc(100vh - 142px);"
        >
            <v-container fluid class="fill-height px-12">
                <v-row class="fill-height align-bottom d-flex justify-start align-end">
                    <v-col class="pb-12">

                        <!--                        <div class="mb-4 display-2 white&#45;&#45;text font-weight-bold">-->
                        <!--                            Hello, welcome to soarscounselingservices-->
                        <!--                            <v-divider style="max-width: 300px;width: 300px;" class="white rounded"></v-divider>-->
                        <!--                        </div>-->

                        <v-responsive class="text-subtitle-1 text-lg-h6 accent--text font-weight-bold mb-5"
                                      style="max-width: 600px;">
                            {{ $t('sexual_offense_and_recovery_specialist') }}
                        </v-responsive>
                        <inertia-link :href="route('about')">
                            <v-btn contained large class="px-5 primary"
                                   style="font-family: 'Montserrat', sans-serif !important;">
                                {{ $t('home.learn_more') }}
                            </v-btn>
                        </inertia-link>
                    </v-col>
                </v-row>
            </v-container>
            <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                        indeterminate
                        color="primary"
                        size="200"
                    ></v-progress-circular>
                </v-row>

            </template>
        </v-img>
        <mission-vision></mission-vision>
        <our-values></our-values>

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
import appLayout from "@/Layouts/AppLayout";
import bg1 from '@/../images/pexels-castorly-stock-3768343.jpg'
import ourValues from "@/components/OurValues";
import missionVision from "@/components/MissionVision";

export default {
    name: "Home",
    components: {
        appLayout,
        ourValues,
        missionVision
    },
    data: () => ({
        bg1,
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
                content: `I truly believe Eamonn helped save my son’s life. He helped my teenager at a time when I was unsure if anyone could. My son is now on his way to college and working at Chick-fil-A. I’m beyond grateful to Eam`,
                person: 'From parent'
            },
        ]
    })

}
</script>

<style scoped>

</style>
