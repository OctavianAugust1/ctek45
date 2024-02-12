<template>
    <div class="about-us">
        <h2 class="title-h2">О нас</h2>
        <pre class="desc" v-html="aboutUs"></pre>
        <p :class="comandTransparent" style="font-weight: bold; margin-top: 20px; font-size: 1.5rem">Наша команда</p>
        <div :class="'comand ' + comandTransparent">
            <div class="comand-image">
                <img class="comand-image__img" src="/storage/app/public/image/about-us/comand1.webp" alt="" width="" height="">
            </div>
            <div class="comand-image">
                <img class="comand-image__img" src="/storage/app/public/image/about-us/comand3.webp" alt="" width="" height="">
            </div>
            <div class="comand-image">
                <img class="comand-image__img" src="/storage/app/public/image/about-us/comand2.webp" alt="" width="" height="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    data() {
        return {
            aboutUs: [],
            comandTransparent: 'comand--transparent',
        }
    },
    methods: {
        async getPageAboutUs() {
            const response = await axios.get('api/page/about_us')
            this.aboutUs = response.data.data.content
            this.comandTransparent = this.aboutUs ? '' : this.comandTransparent
        }
    },
    mounted() {
        this.getPageAboutUs()
    }
}
</script>

<style lang="sass">
    .comand
        height: 520px
        display: flex
        flex-flow: row wrap
        justify-content: center

    .comand--transparent
        opacity: 0

    .comand-image
        position: relative
        max-height: 500px
        max-width: 450px
        margin-right: 20px
        margin-top: 20px

    .comand-image__img
        -o-object-fit: cover
        object-fit: cover
        border-radius: 20px
        height: 100%
        width: 100%
</style>
