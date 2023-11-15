<template>
    <div class="container py-3  ">
        <select name="archetype" v-model="selectedOption" id="selectOption" @change="changeArray()">
            <option value='' selected>ALL</option>
            <option v-for="archetype in store.archetypeArray" :value="archetype">
                {{ archetype }}
            </option>
        </select>
    </div>
</template>

<script>

import { store } from "../data/store.js"

export default {
    name: 'SelectComponent',
    data() {
        return {
            store,

        }
    },
    methods: {
        changeArray() {
            this.$emit('changed-array', this.selectedOption)
        }
    }
}
</script>

<style lang="scss" scoped></style>