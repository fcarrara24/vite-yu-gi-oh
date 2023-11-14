<template class>
    <div class="d-flex flex-row justify-content-between container">
        <div class="button bg-primary p-2" @click="decreaseOffset">↞</div>
        <div class="button bg-primary p-2" @click="increaseOffset">↠</div>

    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'FooterComponent',
    data() {


        return {}
    },
    methods: {
        increaseOffset() {
            store.offset += 20
            this.$emit = ('refreshed-array', store.endPoint.archetype)
        },
        decreaseOffset() {
            if (store.offset >= 20) {
                store.offset -= 20
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>