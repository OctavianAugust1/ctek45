<template>
<primary-header/>
    <main class="main container">
        <div class="upButton" id="upButton">
            <svg class="arrow-up" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z">
                </path>
            </svg>
        </div>
        <router-view/>
    </main>
<primary-footer/>
</template>

<script>
import PrimaryHeader from "@/src/components/PrimaryHeader.vue";
import PrimaryFooter from "@/src/components/PrimaryFooter.vue";

export default {
    components: { PrimaryHeader, PrimaryFooter },
    mounted() {
        const upBtn = document.getElementById('upButton')
        upBtn.addEventListener('click', function () {
            return window.scrollTo(scrollX, 0)
        })
        window.addEventListener('scroll', function () {
            if (scrollY < document.documentElement.clientHeight) {
                upBtn.style.opacity = 0
                upBtn.style.visibility = 'hidden'
            } else {
                upBtn.style.opacity = 1
                upBtn.style.visibility = 'unset'
            }
        })
    }
}
</script>

<style lang="sass">
    @use '../../css/bootstrap'
    @use '../../css/normalize'

    .header, .footer, .container
        background: rgb(212, 227, 244)

    .main
        font-family: Nunito, Open Sans, Arial
        font-size: 1.2rem
        width: 100%
        border-radius: 5px
        line-height: 1.5
        margin: 20px auto
</style>
