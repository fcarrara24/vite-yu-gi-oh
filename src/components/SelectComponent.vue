<template>
    <div class="container py-3  ">
        <select name="archetype" v-model="selectedOption" id="selectOption" @change="changeArray()">
            <option value=''>ALL</option>
            <option v-for="archetype in archetypes" :value="archetype">
                {{ archetype }}
            </option>
        </select>
    </div>
</template>

<script>
import { archetypes } from "../data/archetypeList";
import { store } from "../data/store.js"

export default {
    name: 'SelectComponent',
    data() {
        return {
            store,
            archetypes,
        }
    },
    methods: {
        changeArray() {
            console.log(this.selectedOption)
            store.changeArchetype(this.selectedOption)
            this.$emit('changed-array')
        }
    }
}
</script>

<style lang="scss" scoped></style>