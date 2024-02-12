<template>
    <div v-if="JSON.parse(isProduction)">
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe height="0"
                    src="https://www.googletagmanager.com/ns.html?id=GTM-KJTRC53"
                    style="display:none;visibility:hidden"
                    width="0">
            </iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    </div>

    <header class="header">
        <div class="header__grid header__grid--app container">
            <div class="hamburger">
                <svg class="bars" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                    </path>
                </svg>
            </div>
            <img class="logo header__logo" src="/storage/app/public/image/logo/logo1.svg" alt="">
            <span class="header__title" style="opacity: 0">Инжиниринговая компания <br><h1>Фирма СТЭК</h1></span>
            <nav class="header__nav">
                <router-link class="header__nav-link" to="/">Главная</router-link>
                <router-link class="header__nav-link" to="/about_us">О нас</router-link>
                <router-link class="header__nav-link" to="/articles">Статьи</router-link>
                <router-link class="header__nav-link" to="/patents">Патенты</router-link>
                <router-link class="header__nav-link" to="/developments">Наши проекты</router-link>
                <router-link class="header__nav-link" to="/contacts">Контакты</router-link>
<!--                <router-link class="header__nav-link" to="/feedback">Связь с нами</router-link>-->
                <a v-if="isAuth" class="header__nav-link header__nav-link--pointer" @click.prevent="this.admin()">Админ</a>
                <a v-if="isAuth" class="header__nav-link header__nav-link--pointer" @click.prevent="this.logout()">
                    <svg class="sign-out" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z">
                        </path>
                    </svg>
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
import axios from "axios";

export default {
    name: "PrimaryHeader",
    data() {
        return {
            isAuth: false,
            isProduction: false,
        }
    },
    methods: {
        admin() {
            window.location.href = '/admin'
        },
        async logout() {
            await axios.post('api/logout')
            location.reload()
        },
        async getIsAuth() {
            const response = await axios.get('/api/isAuth')
            this.isAuth = response.data
        },
        async getIsProduction() {
            const response = await axios.get('/api/isProduction')
            this.isProduction = response.data
        },
    },
    created() {
        this.getIsAuth()
        this.getIsProduction()
    },
}
</script>

<style lang="sass">
    .hamburger
        display: none
        height: 50px
        cursor: pointer
        .bars
            max-height: 100%
            max-width: 100%
        @media (max-width: 1040px)
            justify-self: end
            grid-area: hamburger
            display: unset
            height: 50px
            width: 50px

    .header
        background: rgb(212, 227, 244)
        font-family: "Open Sans", "Nunito", Arial
        color: #185aa0

    .header__grid
        display: grid
        grid-template: "logo title" "logo nav"
        align-items: center
        justify-items: center
        grid-template-columns: auto 1fr
        @media (max-width: 480px)
            grid-template: "logo hamburger" "title title"
            grid-template-columns: 1fr 1fr
        @media (max-width: 1040px) and (min-width: 481px)
            grid-template: "logo title hamburger"

    .header__grid--app
        margin: auto

    .header__logo
        grid-area: logo
        width: 215px

    .header__title
        text-align: center
        line-height: 1.2
        grid-area: title
        font-weight: bold
        font-size: 2.6em
        @media (max-width: 480px)
            line-height: 1
            margin: 5px 0
            font-size: 1.5rem
        @media (max-width: 1040px)
            text-align: center
        @media (max-width: 1040px) and (min-width: 481px)
            margin: 20px 0
            font-size: 3vw
        @media (max-width: 1400px) and (min-width: 1041px)
            font-size: 2rem
        h1
            font-size: unset
            margin: unset

    .header__nav
        grid-area: nav
        width: 100%
        display: flex
        flex-wrap: nowrap
        justify-content: space-between
        align-items: center
        padding: 0 3vw
        @media (max-width: 1040px)
            visibility: hidden
            grid-area: unset
            position: fixed
            right: 0
            top: 0
            bottom: 0
            background: rgb(212, 227, 244)
            height: 100%
            display: flex
            flex-direction: column
            justify-content: space-around
        @media (max-width: 480px)
            z-index: 4
            width: 70vw
        @media (max-width: 1040px) and (min-width: 481px)
            z-index: 11
            width: 30vw

    .header__nav-link
        color: #185aa0
        font-size: 1.5em
        font-weight: bold
        padding: 3px
        transition: color 0.1s linear
        @media (max-width: 1040px)
            font-size: 1.2rem
            &:not(header__nav-link:first-child)
                margin-top: 20px
        @media (max-width: 1400px) and (min-width: 481px)
            font-size: 1.2rem
        &:hover
            text-shadow: 1px 1px 6px rgb(140, 140, 140)
            color: black

    .header__nav-link--pointer
        cursor: pointer


    /* homepage */
    .header__grid--wrapper-home-page
        margin: 0 auto
        max-width: 90%
        @media (max-width: 1040px)
            max-width: unset

    .header__grid--home-page
        position: fixed
        padding: 10px
        width: 100%
        background: rgb(212, 227, 244)
        z-index: 2
        @media (max-width: 480px)
            position: absolute
            z-index: unset
            height: 138px
        @media (max-width: 1040px) and (min-width: 481px)
            height: 128px

    .header__gradient::after
        content: ""
        position: absolute
        display: block
        width: 100%
        margin-top: 160px
        height: calc(40vh - 160px)
        background: linear-gradient(180deg, rgb(212, 227, 244) 5%, rgba(0, 0, 0, 0) 100%)
        z-index: 1
        @media (max-width: 480px)
            margin-top: 137px
        @media (max-width: 1400px) and (min-width: 481px)
            margin-top: 121px
            height: calc(40vh - 121px)

</style>
