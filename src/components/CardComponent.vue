<template>
    <div>

        {{ name }}
        <img :src="image_url" alt="">
        {{ archetype }}
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