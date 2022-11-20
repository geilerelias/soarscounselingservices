<template>
    <v-app>
        <v-app-bar
            app
            color="#43a047"
            dark
            
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
                ></v-img>
            </template>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title>Title</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-sheet
                id="scrolling-techniques-5"
                class="overflow-y-auto"
            >
                <v-container>
                    <v-row>
                        <v-col cols="6" v-for="item in 10" :key="item.id">
                            <v-card>
                                <v-card-title>{{ item }}</v-card-title>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem deleniti
                                dolor
                                doloribus dolorum eligendi enim, eveniet fuga fugit ipsam nesciunt quasi recusandae
                                suscipit
                                temporibus ut velit voluptatem. Iste, ratione.
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script>
import appLayout from "@/Layouts/AppLayout";


export default {
    name: "Example",
    components: {appLayout}

}
</script>

<style scoped>

</style>
