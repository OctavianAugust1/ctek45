<template>
    <h2 class="title-h2">Контакты</h2>
    <div class="contact">
        <div class="contact__desc baloon baloon_contacts" v-html="this.contactsText"/>

        <div class="contact__desc contact__blocks">
            <div class="contact__block">
                <div class="contact__image">
                    <img class="contact__img" v-lazy="'storage/image/other/contact1.webp'" alt="" height="" width="">
                </div>
                <div>
                    <p class="contact__paragraph contact__paragraph--block">Директор: Денисов Юрий Геннадьевич </p>
                </div>
            </div>
            <div class="contact__block">
                <div class="contact__image">
                    <img class="contact__img" v-lazy="'storage/image/other/contact2.webp'" alt="" height="" width="">
                </div>
                <div>
                    <p class="contact__paragraph contact__paragraph--block">Зам. директора: Вибе Вячеслав Петрович</p>
                </div>
            </div>
            <div class="contact__block">
                <div class="contact__image">
                    <img class="contact__img" v-lazy="'storage/image/other/contact3.webp'" alt="" height="" width="">
                </div>
                <div>
                    <p class="contact__paragraph contact__paragraph--block">Гл. бухгалтер: Денисова Елена Владимировна</p>
                </div>
            </div>
        </div>
    </div>


    <h3 class="title-h2">Мы на карте</h3>
    <div class="double-gis double-gis--contacts">
        <a class="dg-widget-link" href="http://2gis.ru/kurgan/firm/70000001053897614/center/65.33730268478395,55.46375965985392/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Кургана</a>
        <div class="dg-widget-link">
            <a href="http://2gis.ru/kurgan/center/65.337313,55.463642/zoom/16/routeTab/rsType/bus/to/65.337313,55.463642╎СТЭК, фирма?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до СТЭК, фирма</a>
        </div>
        <noscript style="color:#c00;font-size:16px;font-weight:bold;">
            Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
        </noscript>
    </div>
</template>

<script>
// import DG from 'https://widgets.2gis.com/js/DGWidgetLoader.js'
export default {
    name: "Contacts",
    data() {
        return {
            contactsText: ''
        }
    },
    methods: {
        async getContactsText() {
            this.contactsText = (await axios.get('api/page/contacts')).data.data.content
        }
    },
    mounted() {
        this.getContactsText()
        // new DG({
        //     "borderColor": "#a3a3a3",
        //     "opt": {"city": "kurgan"},
        //     "org": [{"id": "70000001034188288"}],
        //     "pos": {"lat": 55.45132512891822, "lon": 65.3401565551758, "zoom": 16}
        // });
    }
}
</script>

<style lang="sass">
    .contact__desc
        margin: 2rem 0

    .contact__desc > p
        margin: 10px 0

    .contact__blocks
        display: flex
        flex-flow: row wrap
        justify-content: space-evenly

    .contact__block
        display: flex
        flex-flow: row wrap
        justify-content: center
        width: 300px
        margin: 20px

    .contact__image
        position: relative
        height: 250px
        width: 250px

    .contact__img
        height: 100%
        width: 100%
        -o-object-fit: cover
        object-fit: cover
        border-radius: 20px

    .contact__paragraph--block
        text-align: center

    /* 2gis *
    .double-gis--contacts
        margin-top: 1rem

    iframe
        width: 100%
</style>
