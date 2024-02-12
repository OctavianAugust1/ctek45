<template>
    <div class="upper-preview">
        <div class="box">
            <h1 class="upper-preview__title-h1">Инжиниринговая компания Фирма СТЭК</h1>
            <h2 class="upper-preview__title-h2">От идеи до готового проекта</h2>
        </div>
    </div>


    <div class="organization-desc homepage--container">
        <div class="organization-desc__quote animate-emergence">
            <h2 class="title-h2 homepage--title-h2">О фирме</h2>
            <div>
                <pre class="desc" v-html="mainContentText[0]"/>
            </div>
        </div>
        <div class="organization-desc__thumbnail organization-desc__thumbnail--anim-translate">
            <div class="organization-desc__project-1">
                <img class="organization-desc__img-1" src="/storage/app/public/image/homepage/company1_bg.webp" alt="" width="" height="">
            </div>
            <div class="organization-desc__project-2">
                <img class="organization-desc__img-2" src="/storage/app/public/image/homepage/company2_bg.webp" alt="" width="" height="">
            </div>
            <div class="organization-desc__project-3">
                <img class="organization-desc__img-3" src="/storage/app/public/image/homepage/company3_bg.webp" alt="" width="" height="">
            </div>
        </div>
    </div>


    <div class="advantages homepage--container">
        <h2 class="title-h2 homepage--title-h2 advantages__title">Преимущества</h2>
        <div class="advantages__advantage animate-emergence">
            <div class="advantages__image">
                <svg class="cogs advantages__icon" viewBox="0 0 640 512">
                    <path d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z">
                    </path>
                </svg>
            </div>
            <div class="advantages__desc">
                <pre class="desc" v-html="mainContentText[1]"/>
            </div>
        </div>
        <div class="advantages__advantage animate-emergence">
            <div class="advantages__image">
                <svg class="user-tie advantages__icon" viewBox="0 0 448 512">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z">
                    </path>
                </svg>
            </div>
            <div class="advantages__desc">
                <pre class="desc" v-html="mainContentText[2]"/>
            </div>
        </div>
        <div class="advantages__advantage animate-emergence">
            <div class="advantages__image">
                <svg class="wallet advantages__icon" viewBox="0 0 512 512">
                    <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z">
                    </path>
                </svg>
            </div>
            <div class="advantages__desc">
                <pre class="desc" v-html="mainContentText[3]"/>
            </div>
        </div>
    </div>

    <div class="cooperate-with-us homepage--container">
        <h2 class="title-h2 homepage--title-h2 cooperate-with-us__title-h2">Сотрудничают с нами</h2>
        <div class="cooperate-with-us__images">
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo1.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo3.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo5.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo7.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo8.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo9.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo10.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo11.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo12.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo13.webp'" alt="" width="" height="">
            </div>
            <div class="cooperate-with-us__image">
                <img class="cooperate-with-us__img" v-lazy="'/storage/app/public/image/about-us/logo14.webp'" alt="" width="" height="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Home",
    data() {
        return {
            mainContentText: [],
        }
    },
    methods: {
        changeHeader() {
            if (document.querySelector('header.header')) {
                document.querySelector('header.header').classList.add('header__gradient')
            }
            if (document.querySelector('.header__grid')) {
                const headerGrid = document.querySelector('.header__grid')
                headerGrid.className = 'header__grid--home-page'
                const headerWrapper = document.createElement('div')
                headerWrapper.className = 'header__grid header__grid--wrapper-home-page'
                const headerGridElements = Array.from(headerGrid.children);
                headerGridElements.forEach(element => headerWrapper.appendChild(element));
                headerGrid.childNodes.forEach(element => headerGrid.removeChild(element));
                headerGrid.insertAdjacentElement('afterbegin', headerWrapper)
            }
        },
        changeMainContainer() {
            if (document.querySelector('main.main')) {
                document.querySelector('main.main').className = 'homepage'
            }
        },
        async getMainContentText() {
            this.mainContentText = (await axios.get('api/page/main_page')).data.data.content
        },
        animateEmergence() {
            var animItems = document.querySelectorAll('.animate-emergence');
            window.addEventListener('scroll', animOnScroll);

            function animOnScroll(params) {
                animItems.forEach(function (animItem) {
                    var animItemHeight = animItem.offsetHeight;
                    var animItemOffset = offset(animItem).top;
                    var animStart = 4;
                    var animItemPoint = window.innerHeight - animItemHeight / animStart;
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }
                    if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
                        animItem.classList.add('animate-emergence--active');
                    }
                });
            }

            function offset(el) {
                var rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top: rect.top + scrollTop,
                    left: rect.left + scrollLeft
                };
            }

            setTimeout(function () {
                animOnScroll();
            }, 300);
        }
    },
    mounted() {
        this.changeHeader()
        this.changeMainContainer()
        this.getMainContentText()
        this.animateEmergence()
    },
    beforeRouteLeave() {
        if (document.querySelector('.header__gradient')) {
            document.querySelector('.header__gradient').className = 'header'
        }
        if (document.querySelector('.header__grid--home-page')) {
            const headerGrid = document.querySelector('.header__grid--home-page')
            headerGrid.className = 'header__grid header__grid--app container'

            const headerWrapper = document.querySelector('.header__grid--wrapper-home-page')
            const headerWrapperElements = Array.from(headerWrapper.children);
            headerWrapper.childNodes.forEach(element => headerWrapper.removeChild(element));
            headerWrapperElements.forEach(element => headerGrid.appendChild(element));
            headerGrid.removeChild(headerWrapper)
        }
        if (document.querySelector('main.homepage')) {
            document.querySelector('main.homepage').className = 'main container'
        }
    }
}
</script>

<style lang="sass">
    .homepage
        font-family: Nunito, Open Sans, Arial
        width: 100%
        display: grid
        margin: unset
        line-height: 1

    .homepage--title-h2
        margin-bottom: 20px
        font-family: Open Sans, Nunito, Arial
        font-weight: bold

    .animate-emergence
        opacity: 0
        transform: translate(0px, 40%)
        transition: opacity 0.2s linear, translate 0.2s linear

    .animate-emergence--active
        transform: translate(0px, 0px)
        opacity: 1

    .homepage__item
        margin-top: 6px

    .homepage--container
        max-width: 1200px
        margin: auto
        display: flex
        flex-direction: column
        align-items: center
        min-height: 900px
        justify-content: center
        align-content: center

    .upper-preview
        margin-top: 160px
        height: calc(100vh - 160px)
        width: 100%
        background-color: rgb(0, 0, 0)
        box-shadow: 0px 20px 20px 14px rgba(0, 0, 0, 0.1)
        display: flex
        &::after
            content: ""
            position: absolute
            top: 160px
            left: 0
            right: 0
            height: calc(100vh - 160px)
            background: url("/storage/image/homepage/blueprint1.webp") no-repeat center/cover
            opacity: 0.7

    .upper-preview__title-h1
        font-size: 4vw

    .upper-preview__title-h2
        font-size: 3vw

    .box
        margin: auto
        font-family: Open Sans, Nunito, Arial
        font-weight: bold
        color: white
        text-shadow: 2px 2px 4px black
        z-index: 1

    .organization-desc__quote,
    .advantages__desc
        line-height: 2

    .organization-desc
        display: grid
        grid-template-columns: 50% 50%

    .organization-desc__quote
        max-width: 750px
        font-size: 1.3em

    .organization-desc__thumbnail
        display: flex
        margin-bottom: 200px

    .organization-desc__project-1,
    .organization-desc__project-2,
    .organization-desc__project-3
        z-index: -3
        border: 1px solid black
        border-radius: 5px
        background: white
        padding: 5px
        box-shadow: 0 0 4px black
        line-height: 0

    .organization-desc__project-1
        position: relative
        top: 40px
        left: -10px

    .organization-desc__project-2
        z-index: -2
        position: relative
        top: 130px
        left: -30px

    .organization-desc__project-3
        position: relative
        top: 250px
        left: -720px

    /* ##########################################  *|
    /* translate  *
    .organization-desc__thumbnail--anim-translate
        animation: company-anim ease-in-out 5s infinite

    .organization-desc__img-1,
    .organization-desc__img-2,
    .organization-desc__img-3
        width: 350px
        height: 215px
        -o-object-fit: cover
        object-fit: cover
        pointer-events: none
        -webkit-user-select: none
        -moz-user-select: none
        user-select: none

    @keyframes company-anim
        from
            transform: translateY(-50px)
        50%
            transform: translateY(-40px)
        to
            transform: translateY(-50px)


    .advantages__title
        justify-self: center
        margin-bottom: 20px

    .advantages__advantage
        width: 100%
        font-size: 1.3rem
        display: grid
        grid-gap: 20px
        grid-template-columns: 15% 1fr
        &:not(:last-child)
            margin-bottom: 40px

    .advantages__image
        justify-self: center
        align-self: center
        height: 100px
        width: 100%

    .advantages__icon
        fill: rgb(53, 53, 53)
        max-height: 100%
        max-width: 100%

    .cooperate-with-us__title-h2
        margin-bottom: 20px

    .cooperate-with-us__images
        display: flex
        flex-flow: row wrap
        justify-content: center
        align-content: center

    .cooperate-with-us__image
        position: relative
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid black
        border-radius: 5px
        height: 170px
        width: 170px
        margin: 10px
        box-shadow: 0 0 10px black

    .cooperate-with-us__img
        max-height: 150px
        max-width: 150px
        margin: 1em 1.3em
</style>
