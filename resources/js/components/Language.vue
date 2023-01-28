<template>
    <div>

        <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-translate</v-icon>
                </v-btn>
            </template>

            <v-list dense>
                <v-subheader>{{ $t("translate_page") }}</v-subheader>

                <v-list-item-group v-model="model" color="primary">
                    <v-list-item
                        v-for="(language, i) in languages"
                        :key="i"
                        @click="changeLanguage(language.locale)"
                    >
                        <v-list-item-avatar tile>
                            <v-img
                                aspect-ratio="1.7"
                                contain
                                :src="language.img"
                            ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>{{ language.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import {i18n} from "@/../plugins/i18n";
import esImg from '@/../images/flags/es-flag.png'
import enImg from "@/../images/flags/en-flag.png"

export default {
    name: "LanguageComponent",
    data() {
        return {
            select: {
                locale: import.meta.env.VUE_APP_I18N_LOCALE,
                title: `${import.meta.env.VUE_APP_I18N_LOCALE}`
            },
            model: null,

            options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
        };
    },
    computed: {
        languages() {
            return [
                {
                    locale: "es",
                    title: this.$t("spanish"),
                    img: esImg
                },
                {
                    locale: "en",
                    title: this.$t("english"),
                    img: enImg
                }
            ];
        }
    },
    methods: {
        changeLanguage(item) {
            i18n.locale = item;
        }
    }
};
</script>
