<template>
    <div class="development">
        <div class="breadcrumbs">
            <router-link class="breadcrumbs__link link" to="/developments">Проекты</router-link>
            &nbsp;&#8594;&nbsp;
            <div class="breadcrumbs__link breadcrumbs__name">{{ development.name }}</div>
        </div>
        <h2 class="title-h2">{{ development.name }}</h2>
        <div class="development__thumbnail imageNavigation">
            <div class="development__thumbnail-image" v-for="imageSmall in development.imagesSmall">
                <img class="development__thumbnail-img for-the-entire-window"
                     v-lazy="imageSmall"
                     @click="toggler = !toggler"
                     alt="">
            </div>
            <FsLightbox
                :toggler="toggler"
                :sources="this.development.imagesBig"
            />
        </div>
        <pre class="desc" v-html="development.description"/>
    </div>
</template>

<script>
import axios from "axios";
import FsLightbox from "fslightbox-vue/v3";

export default {
    name: "Development",
    components: {FsLightbox},
    data() {
        return {
            toggler: false,
            'development': [],
        }
    },
    methods: {
        getDevelopmentId() {
            return this.$route.params.id
        },
        async getDevelopment(id) {
            const response = await axios.get(`/api/development/read/${id}?withImages=1`)
            this.development = response.data.data
        }
    },
    mounted() {
        this.getDevelopment(this.getDevelopmentId())
    }
}
</script>

<style lang="sass">
    .development__thumbnail
        display: flex
        flex-flow: row wrap
        margin-bottom: 20px

    .form--development__thumbnail
        display: none

    .development__thumbnail-image
        position: relative
        width: 300px
        height: 200px
        margin-right: 20px
        margin-top: 20px
        background: #a8cffa
        border-radius: 5px
        @media (max-width: 480px)
            margin-right: unset
            width: 100%

    .development__thumbnail-img
        max-height: 100%
        max-width: 100%
        -o-object-fit: cover
        object-fit: cover
        @media (max-width: 480px)
            height: 100%
            width: 100%
</style>
