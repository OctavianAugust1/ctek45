<template>
    <div class="developments__thumbnail">
        <img class="developments__thumbnail-img for-the-entire-window"
             v-lazy="development.pathSmall"
             @click="toggler = !toggler"
             alt="">
        <FsLightbox
            :toggler="toggler"
            :sources="[development.pathBig]"
        />
    </div>
    <h3 class="developments__name">{{ development.name }}</h3>
    <div class="developments__category">Категория: <span class="categoryDev">{{ development.category }}</span></div>
    <a class="link button" :href="'/development/' + development.id">Подробнее</a>
</template>

<script>
import FsLightbox from "fslightbox-vue/v3";

export default {
    name: "DevelopmentItem",
    components: { FsLightbox },
    data() {
        return {
            toggler: false,
        }
    },
    props: {
        development: Object
    }
}
</script>

<style lang="sass">
    .developments__thumbnail
        position: relative
        background: #a8cffa
        height: 300px
        width: 100%

    .developments__thumbnail-img
        height: 100%
        width: 100%
        justify-self: center
        border-radius: 5px
        -o-object-fit: cover
            object-fit: cover

    .developments__name
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        overflow: hidden
</style>
