<template>
<app-layout>
    <v-img cover
           :src="bg1"
           class="white--text"
           gradient="rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65), rgb(0, 0, 0)"
           style="height:calc(100vh - 142px);"
    >
        <v-container fluid class="fill-height px-12">
            <v-row class="fill-height align-bottom d-flex justify-start align-end">
                <v-col class="pb-12">
                    <div class="mb-4 display-2 white--text font-weight-bold"> Hello, welcome to soarscounselingservices</div>
                    <v-responsive class="text-subtitle-1 text-lg-h6 accent--text font-weight-bold mb-5" style="max-width: 600px;">
                        Sexual Offense and Recovery Specialist.
                    </v-responsive>
                    <inertia-link :href="route('about')">
                        <v-btn contained large class="px-5 primary"
                               style="font-family: 'Montserrat', sans-serif !important;">
                            Saber más
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


</app-layout>
</template>

<script>
import appLayout from "@/Layouts/AppLayout";
import bg1 from '@/../images/que_es_la_tecnica_de_la_silla_vacia_en_psicologia_6293_0_600.jpg'

export default {
    name: "Home",
    components: {appLayout},
    data:()=>({
        bg1
    })

}
</script>

<style scoped>

</style>
