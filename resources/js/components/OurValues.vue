<template>
    <v-sheet class="my-12">
        <div class="text-center">
            <div class="text-uppercase overline primary--text ">
                {{ $t("our") }}
            </div>
            <h1 class="text-h6 text-lg-h5 text-uppercase font-weight-black mb-2 text-center">
                {{ $t("values.text") }}
            </h1>

            <v-divider class="primary mx-auto mb-2  theme--light" style="max-width: 28px;"></v-divider>
            <v-container>
                <v-responsive class="mx-auto mt-4" style="max-width: 1200px;">
                    <p v-html="$t('values.description')"></p>
                </v-responsive>
            </v-container>
        </div>
        <v-container fluid class="py-4 py-lg-8">
            <v-row class="mx-auto d-flex justify-center">
                <v-col v-for="(item, n) in ourValues" :key="n" class="col-sm-6 col-lg-3 col-12">
                    <div class="v-responsive mx-auto text-center" style="max-width: 300px;">
                        <div class="v-responsive__content">
                            <div class="mb-2">
                                <v-icon
                                    class="text-h1  primary--text">
                                    {{ item.icon }}
                                </v-icon>
                            </div>
                            <div class="text-h5 mt-3">{{ $t("values." + item.name) }}</div>
                            <div class="font-weight-regular mt-2">{{ $t("values." + item.content) }}
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
export default {
    name: 'OurValues',
    data: () => ({
        ourValues: [
            {
                icon: 'mdi-account-supervisor',
                name: 'QUALITY_AND_PERSONALIZED_ATTENTION',
                content: 'QUALITY_AND_PERSONALIZED_ATTENTION_DESCRIPTION'
            },
            {
                icon: 'mdi-account-check',
                name: 'CONFIDENTIALITY',
                content: "CONFIDENTIALITY_DESCRIPTION"
            },
            {
                icon: 'mdi-account-tie',
                name: 'INTEGRAL_SERVICES',
                content: 'INTEGRAL_SERVICES_DESCRIPTION'
            },
        ]
    })
}
</script>
