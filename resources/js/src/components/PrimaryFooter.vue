<template>
    <footer class="footer">
        <div class="footer__grid container">
            <img class="logo footer__logo" src="/storage/app/public/image/logo/logo1.svg" alt="">
            <span class="footer__caption">Контактная информация</span>
            <div class="footer__desc" v-if="$route.path === '/contacts'" v-html="this.contactText[1]"/>
            <div class="footer__desc" v-else v-html="this.contactText[0]"/>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PrimaryFooter",
    data() {
        return {
            contactText: ''
        }
    },
    methods: {
        async getContactPage() {
            this.contactText = (await axios.get('/api/page/contacts')).data.data.content
        },
    },
    mounted() {
        this.getContactPage()
    }
}
</script>

<style lang="sass">
    .footer
        background: rgb(212, 227, 244)
        grid-row: 4
        font-family: Nunito, Open Sans, Arial

    .footer__attached
        position: absolute
        width: 100%
        bottom: 0

    .footer__grid
        margin: auto
        display: grid
        grid-template: "title logo" "inf_txt logo"
        @media (max-width: 480px)
            display: flex
            flex-direction: column

    .footer__caption
        grid-area: title
        margin-bottom: 10px

    .footer__desc
        grid-area: inf_txt
        line-height: 1.8

    .footer__logo
        grid-area: logo
        justify-self: end
        @media (max-width: 480px)
            display: none
</style>
