<template>
    <div class="">
        <div class="cardBg h-100 ">
            <div class="imgContainer">
                <img :src="image_url" alt="">
            </div>
            <div class="d-flex flex-column justify-content-between ">
                <div class="name text-white text-uppercase">
                    {{ name }}
                </div>
                <div class="species">
                    {{ archetype }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: [
        'name',
        'archetype',
        'image_url',

    ],



}
</script>

<style lang="scss" scoped></style>