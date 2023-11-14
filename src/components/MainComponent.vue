<template>
    <div>



        <div></div>
        <div class="container bg-white p-5 ">
            <div class="w-100 h-100 result bg-black  d-flex flex-row align-items-center p-3">found {{ foundCards }} cards
            </div>
            <div class="cardContainer d-flex flex-row flex-wrap justify-content-between  ">
                <CardComponent v-for="card in store.cardResponse" :name="card.name"
                    :image_url="card.card_images[0].image_url" :archetype="card.archetype" class="myCard  pt-0  " />
            </div>

        </div>

    </div>
</template>

<script>

import { store } from "../data/store.js"
import CardComponent from "./CardComponent.vue";
export default {
    name: "HeaderComponent",
    data() {
        return {
            store,
            selectedOption: ''
        }
    },
    methods: {

    },
    created() {
    },
    components: { CardComponent },
    computed: {
        foundCards() {
            return store.cardResponse.length;
        }
    }
}
</script>

<style lang="scss" scoped></style>