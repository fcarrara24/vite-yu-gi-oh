<template>
    <div>
        <h2>Main</h2>
        <CardComponent v-for="card in store.cardResponse" :name="card.name" :image_url="card.card_images[0].image_url"
            :archetype="card.archetype" />
    </div>
</template>

<script>
import { store } from "../data/store.js"
import CardComponent from "./CardComponent.vue";
export default {
    name: "HeaderComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        cardParser() {
            console.log(store)
        }
    },
    created() {
        this.cardParser()
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped></style>