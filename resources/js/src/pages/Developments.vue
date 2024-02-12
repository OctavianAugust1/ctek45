<template>
    <div class="developments">
        <div class="developments__header">
            <h2 class="title-h2 developments__header--title">Наши проекты</h2>
            <div class="dropdown developments__header--dropdawn">
                <span class="dropdown__caption">Категория</span>
                <select class="dropdown__list dropdown__list--sort">
                    <option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
                    <option class="dropdown__item">Не выбрано</option>
                    <option class="dropdown__item" v-for="developmentsCategory in developmentsCategories">
                        {{ developmentsCategory['title'] }}
                    </option>
                </select>
            </div>
        </div>
        <div class="grid grid--developments">
            <div class="developments__item" v-for="development in developments">
                <DevelopmentItem :development="development"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import DevelopmentItem from "@/src/components/Development/DevelopmentItem.vue";

export default {
    name: "Developments",
    components: {DevelopmentItem},
    data() {
        return {
            developments: [],
            developmentsCategories: [],
        }
    },
    methods: {
        async getDevelopments() {
            const response = await axios.get('api/development/read')
            this.developments = response.data.data
        },
        async getDevelopmentsCategories() {
            const response = await axios.get('api/developmentsCategories')
            this.developmentsCategories = response.data.data
        },
    },
    mounted() {
        this.getDevelopments()
        this.getDevelopmentsCategories()
    }
}
</script>

<style lang="sass">
    .developments__header
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        grid-column: 1/3

    .developments__item
        width: 100%
        display: grid
        grid-gap: 5px
        grid-template-rows: auto 1fr auto auto
        padding: 20px
        justify-self: center
        border: solid 1px black
        border-radius: 20px

    .grid--developments
        display: grid
        grid-gap: 1em
        grid-template-columns: repeat(auto-fill, minmax(440px, 1fr))
        margin: 20px 0
</style>
