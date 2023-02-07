<template>
    <app-layout>
        <inertia-head :title="$t('links.contact')"></inertia-head>
        <section id="about" style="transform-origin: center top 0px;">
            <v-row class="no-gutters">
                <v-col class="col col-12">
                    <section id="hero-alt">
                        <v-img height="225"
                               gradient="to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)"
                               :src="bg"
                               max-width="100%"
                               style="height: 225px; max-width: 100%;">

                            <v-row class="ma-0 fill-height text-center align-center justify-center">
                                <v-col class="col col-12">
                                    <h1
                                        class="text-h3 font-weight-500 mb-2 text-center white--text">
                                        {{ $t('links.contact') }}
                                    </h1>
                                    <v-responsive class="primary mx-auto mb-6"
                                                  style="max-width: 28px;">
                                        <v-divider aria-orientation="horizontal"/>
                                    </v-responsive>

                                    <v-breadcrumbs dark class="justify-center pa-0 text--primary "
                                                   :items="items"
                                    ></v-breadcrumbs>
                                </v-col>
                            </v-row>

                        </v-img>
                    </section>
                </v-col>
            </v-row>
        </section>

        <v-sheet light class="rounded-0" style="padding: 56px 0px;">
            <v-container class="container">
                <v-row class="justify-space-between">
                    <v-col class="col-md-5 col-12">
                        <div>
                            <v-container class="container pa-0" pace="6">
                                <v-row class="no-gutters justify-start">
                                    <v-col class="col-12">
                                        <h3
                                            class="text-uppercase text-h6 font-weight-bold mb-1 text-left">
                                            {{ $t('contact.keep_in_touch_with_us') }}
                                        </h3>
                                        <v-responsive class=" primary mr-auto mb-6" style="max-width: 28px;">
                                            <v-divider/>
                                        </v-responsive>
                                        <p class="justify-text base-body text-body-1 grey--text text--darken-1 text-justify mb-6">
                                            {{ $t('contact.message') }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <div>
                                <div class="pt-2 mb-0 d-flex">
                                    <div class="d-inline-flex mb-3 align-self-start">
                                        <v-avatar class="transparent"
                                                  size="72"
                                        >
                                            <v-icon size="36">
                                                mdi-map-marker-outline
                                            </v-icon>
                                        </v-avatar>
                                    </div>
                                    <div class="d-flex justify-center align-center">
                                        <p class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                           style="max-width: 700px;">
                                            320 Town Center Ave | Suite C-11 #506
                                            <br>
                                            Suwanee, Georgia 30024, USA
                                        </p>
                                    </div>
                                </div>
                                <v-divider class="my-2"></v-divider>
                                <div class="pt-2 mb-0 d-flex">
                                    <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                        <!---->
                                        <v-avatar class="transparent" size="72">
                                            <v-icon size="36">
                                                mdi-cellphone
                                            </v-icon>
                                        </v-avatar>
                                    </div>

                                    <div class="d-flex flex-column justify-center align-center">
                                        <a
                                            class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                            href="tel:14046441819">
                                            +1 404 644 1819
                                        </a>

                                    </div>
                                </div>

                                <v-divider class="my-2"></v-divider>

                                <div class="pt-2 mb-0 d-flex align-center">
                                    <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                        <v-avatar class="transparent" size="72">
                                            <v-icon size="36">
                                                mdi-email
                                            </v-icon>
                                        </v-avatar>
                                    </div>
                                    <div class="d-flex flex-column justify-start aling-center">
                                        <a
                                            href="mailto:soarsatlanta@yahoo.com <soarsatlanta@yahoo.com>;"
                                            class="text-body-1 grey--text text--darken-1 mb-0">
                                            soarsatlanta@yahoo.com
                                        </a>
                                        <a
                                            href="mailto:contact@soarscounselingservices.com <contact@soarscounselingservices.com>;"
                                            class="text-body-1 grey--text text--darken-1 mb-0">
                                            contact@soarscounselingservices.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>

                    <v-col class="col-md-6 col-12">
                        <div>
                            <v-container class="container pa-0" space="4">
                                <v-row class="row no-gutters justify-start">
                                    <v-col class="col col-12">
                                        <h3
                                            class="text-uppercase text-h6 font-weight-bold mb-1 text-left">
                                            {{ $t('contact.send_us_your_message') }}
                                        </h3>
                                        <v-responsive class=" primary mr-auto mb-6" style="max-width: 28px;">
                                            <v-divider/>
                                        </v-responsive>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-form
                                @submit.prevent="send(mail)"
                                ref="form"
                                v-model="valid"
                                :lazy-validation="false">
                                <v-text-field
                                    outlined
                                    :label="$t('contact.name')"
                                    v-model="mail.name"
                                    :rules="nameRules"

                                ></v-text-field>

                                <v-text-field
                                    outlined
                                    :label="$t('contact.email')"
                                    v-model="mail.email"
                                    :rules="emailRules"
                                ></v-text-field>

                                <v-text-field
                                    outlined
                                    :label="$t('contact.subject')"
                                    v-model="mail.subject"
                                    :rules="subjectRules"
                                ></v-text-field>

                                <v-textarea
                                    outlined
                                    label="Content"
                                    :label="$t('contact.content')"
                                    v-model="mail.content"
                                    :rules="contentRules"
                                ></v-textarea>

                                <v-btn class="font-weight-bold white--text primary" @click="send(mail)">
                                    {{ $t('contact.send') }}
                                </v-btn>
                            </v-form>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>


        <v-sheet class="gray" rounded="lg">
            <v-container>
                <v-card>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4627.686273658577!2d-84.06658762742123!3d34.05634656922949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s320%20Town%20Center%20Ave%20%7C%20Suite%20C-11%20%23506!5e0!3m2!1ses-419!2sco!4v1668903870957!5m2!1ses-419!2sco"
                        height="450" style="border:0; width: 100%" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                </v-card>
            </v-container>
        </v-sheet>

        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-snackbar v-model="snackbar"
                    right
                    shaped
                    top
                    outlined
                    color="primary">
            {{ response }}
            <v-btn
                color="secondary"
                text
                @click="snackbar = false"

            >
                <v-icon>
                    mdi-close-outline
                </v-icon>
            </v-btn>
        </v-snackbar>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import bg from '@/../images/contact-us-image.jpg'

export default {
    components: {
        AppLayout
    },
    data: () => ({
        bg,
        overlay: false,
        snackbar: false,
        response: "",
        items: [
            {
                text: 'Home',
                disabled: false,
                href: '/',
            },
            {
                text: 'Contact',
                disabled: true,
                href: '/contact',
            },
        ],
        mail: {name: "", email: "", subject: "", content: ""},
        valid: true,
        nameRules: [
            v => !!v || "El nombre es requerido",
            v =>
                (v && v.length <= 30) ||
                "El nombre no puede tener mas de 30 caracteres"
        ],
        emailRules: [
            v => !!v || "E-mail es requerido",
            v => /.+@.+\..+/.test(v) || "E-mail invalido"
        ],
        subjectRules: [
            v => !!v || "El tema es requerido",
            v =>
                (v && v.length <= 50) ||
                "El tema no puede tener mas de 50 caracteres"
        ],
        contentRules: [v => !!v || "El mensaje es requerido"],

    }),
    methods: {

        send() {

            if (!this.$refs.form.validate()) {
                return;
            } else {
                this.overlay = true;
                const newMail = this.mail;
                console.log(newMail)
                axios
                    .post("/send-mail", newMail)
                    .then(res => {
                        this.overlay = false;
                        this.snackbar = true;
                        this.response = "Mensaje enviado correctamente 😀";
                        this.reset();
                    })
                    .catch(res => {
                        this.snackbar = true;
                        this.response = "ha ocurrido un error en el envío del mensaje 😥";
                        this.overlay = false;
                    });
                console.log(this.mail);
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    }
};
</script>
<style>
.subject--light.v-breadcrumbs .v-breadcrumbs__divider, .subject--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
    color: white !important;
}

.v-skeleton-loader__image {
    height: 300px;
}
</style>
