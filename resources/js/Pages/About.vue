<template>
    <app-layout>
        <section>
            <v-container class="mt-10">
                <v-row>
                    <v-col class="col-md-6 col-lg-7 col-12">
                        <h1 class="primary--text text-h5 text-sm-h4 text-lg-h3 mt-xl-4 font-weight-bold font-weight-bold">
                            Eamonn Walsh, LCSW
                        </h1>

                        <h2 class="text-subtitle-1 text-sm-body-1 mt-4 text-justify">
                            I was born in London of Irish parents. Before coming to the United States I worked as a
                            social worker in a variety of settings. I worked as a Community Social Worker and as a front
                            line residential staff in a group home for troubled boys and also for adults with mental
                            illness. When I came to the United Sates I worked as a Job Coach finding jobs for adults
                            with mental illness. I also worked as a Social Worker for the elderly in Washington DC.
                            After this I became a therapist and have been providing therapy to adolescents for over 2O
                            years. In my free time I enjoy watching (Atlanta United!) and playing soccer and riding my
                            motorcycle. I believe and work at developing strong rapport with all of my clients. I have a
                            warm non-judgmental, supportive approach. I provide individual and group therapy.
                        </h2>
                    </v-col>
                    <v-col class="d-none d-md-block col-md-6 col-lg-5 col-12">
                        <v-card outlined class="rounded-lg">
                            <v-img :src="ImgEamonn" class="rounded-lg" cover outline>

                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </section>

        <v-container>
            <v-sheet v-for="item in information" :key="item.id" class="my-12">
                <div class="text-left">
                    <h1 class="text-h6 text-lg-h5 text-uppercase font-weight-black mb-2 ">
                        {{ item.name }}
                    </h1>

                    <v-divider class="primary mb-2  theme--light" style="max-width: 28px;"></v-divider>
                </div>

                <v-row class="mt-4">

                    <v-col v-for="element in item.children" :key="item.id" class="col-md-6 col-12">
                        <div class="d-flex">
                            <div class="mr-2">
                                <v-sheet light class="pa-2 rounded secondary">
                                    <v-icon dark>
                                        {{ element.icon }}
                                    </v-icon>
                                </v-sheet>
                            </div>
                            <div>
                                <div class="text-h5">{{ element.name }}</div>
                                <div v-if="element.description" class="text-h6 mt-1" v-html="element.description">

                                </div>
                            </div>

                        </div>
                    </v-col>

                </v-row>

            </v-sheet>
        </v-container>

        <MissionVision/>

        <OurValues/>
    </app-layout>
</template>

<script>
import appLayout from "@/Layouts/AppLayout";
import ImgEamonn from '@/../images/eamonn.jpg'
import OurValues from "@/components/OurValues";
import MissionVision from "@/components/MissionVision";

export default {
    name: "About",
    components: {
        MissionVision,
        OurValues,
        appLayout,
    },
    data: () => ({
        ImgEamonn,
        information: [
            {
                name: 'Qualifications',
                children: [
                    {
                        name: 'Bachelors in Social Anthropology',
                        description: `<span class="font-weight-bold">University of Swansea</span> <br>
                            Wales - United Kingdom (UK)`,
                        icon: 'mdi-account-school'
                    },
                    {
                        name: 'Masters in Social Work',
                        description: `<span class="font-weight-bold">University of Bangor  </span><br>
                            Wales - United Kingdom (UK)`,
                        icon: 'mdi-account-school'
                    },
                ]
            }, {
                name: 'License and State',
                children: [
                    {
                        name: 'Licensed Clinical Social Worker Georgia CSW002273',
                        description: '',
                        icon: 'mdi-certificate'
                    },
                ]
            }, {
                name: 'Years in Practice',
                children: [
                    {
                        name: '20 Years',
                        description: '',
                        icon: 'mdi-calendar-clock-outline'
                    },
                ]
            }, {
                name: 'Client Focus',
                children: [
                    {
                        name: 'Adolescents 13-18',
                        description: '',
                        icon: 'mdi-image-filter-center-focus-strong'
                    },
                ]
            }, {
                name: 'Modality',
                children: [
                    {
                        name: 'Individual',
                        description: '',
                        icon: 'mdi-account'
                    }, {
                        name: 'Group',
                        description: '',
                        icon: 'mdi-account-group'
                    },
                ]
            }
        ]
    }),


}
</script>

<style scoped>
.w-full {
    width: 100% !important;
}

@media (min-width: 960px) {
    .w-md-half {
        width: 50% !important;
    }
}
</style>

