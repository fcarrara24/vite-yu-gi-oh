<template>
    <div class="">
        <div class="cardBg h-100 ">
            <div class="imgContainer">
                <img :src="image_url" alt="">
            </div>
            <div class="d-flex flex-column justify-content-between p-2">
                <div class="name text-white text-uppercase text-center">
                    {{ name }}
                </div>
                <div class="species text-center">
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