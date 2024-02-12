<template>
<div class="patents">
    <h2 class="title-h2 patents--title">Наши патенты</h2>
    <div class="grid grid--patents">
        <div v-for="patent in patents" class="patents__item">
            <patent :patent="patent"/>
        </div>
    </div>
</div>
</template>

<script>
import PrimaryHeader from "@/src/components/PrimaryHeader.vue";
import PrimaryFooter from "@/src/components/PrimaryFooter.vue";
import Patent from "@/src/components/Patent/Patent.vue";
export default {
    name: "Patents",
    components: {Patent, PrimaryFooter, PrimaryHeader},
    data() {
        return {
            patents: this.getPatents(),
        }
    },
    methods: {
        async getPatents() {
            const response = await axios.get('/api/patent/read')
            this.patents = response.data.data
        },
    },
}
</script>

<style lang="sass">
    .patents__name, .developments__name
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        overflow: hidden

    .grid--patents
        display: grid
        grid-gap: 1em
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
        margin: 20px 0
        @media (max-width: 480px)
            grid-template-columns: 1fr

    .patents__form
        display: flex
        flex-flow: column wrap
        justify-content: center
        width: 100%

    .patents__form-box
        display: grid
        grid-template-columns: 20% 1fr
        margin: 1em 0

    .form-box--patents, .form-box__input-text--patents
        width: 100%

    .patents--title
        grid-column: 1/4
</style>
