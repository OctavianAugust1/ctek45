<template>
    <div class="patents__thumbnail">
        <div class="patents__thumbnail-image for-the-entire-window">
            <img class="patents__thumbnail-img" @click="toggler = !toggler" v-lazy="patent['cover_small']" alt="">
            <FsLightbox
                :toggler="toggler"
                :sources="[patent['cover_big']]"
            />
        </div>
    </div>
    <h3 class="patents__name">{{ patent['name'] }}</h3>
</template>

<script>
import FsLightbox from "fslightbox-vue/v3"
export default {
    name: "Patent",
    components: { FsLightbox },
    data() {
        return {
            toggler: false,
        }
    },
    props: {
        patent: Object,
    },
}
</script>

<style lang="sass">
    .patents__item
        display: flex
        flex-flow: column wrap
        align-items: center
        text-align: center
        padding: 20px
        border: solid 1px black
        border-radius: 20px

    .patents__thumbnail
        position: relative

    .patents__thumbnail-image
        height: 500px
        width: 350px
        margin-bottom: 10px
        @media (max-width: 480px)
            height: unset
            width: 100%

    .patents__thumbnail-img
        height: 100%
        width: 100%
        -o-object-fit: cover
            object-fit: cover

    .patents__name
        font-size: large
</style>
