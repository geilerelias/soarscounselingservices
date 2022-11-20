<template>
    <v-sheet class="secondary  rounded-0" style="padding: 48px 0px;">
        <v-responsive class=" mx-auto" style="max-width: 1350px;">
            <v-container class="">
                <v-row>
                    <v-col class="col-sm-6 col-12 pa-4">
                        <v-container class="pa-0">
                            <v-row class="no-gutters justify-center">

                                <v-col class="col col-12">
                                    <h3
                                        class="text-uppercase monserrat-text text-h6 font-weight-bold mb-1 text-center white--text">
                                        {{ $t("mission") }}
                                    </h3>
                                    <v-divider dark class="white mx-auto mb-6"
                                               style="max-width: 28px;"/>

                                    <p class="text-body-1 white--text text-center mb-6 text-justify">
                                        {{ $t("mission_content") }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="col-sm-6 col-12 pa-4">
                        <v-container class="pa-0">
                            <v-row class="no-gutters ">
                                <v-col class="col col-12">
                                    <h3
                                        class="text-uppercase text-h6 monserrat-text font-weight-bold mb-1 text-center white--text">
                                        {{ $t("vision") }}
                                    </h3>
                                    <v-divider dark class="white mx-auto mb-6"
                                               style="max-width: 28px;"/>

                                    <p class="text-body-1 white--text  mb-6 text-justify">
                                        {{ $t("vision_content") }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>

                </v-row>
            </v-container>

        </v-responsive>
    </v-sheet>
</template>
<script>
export default {
    name: 'MissionVision'
}
</script>
