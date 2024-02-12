<template>
    <div class="breadcrumbs">
        <router-link class="breadcrumbs__link link" to="/articles">Статьи</router-link>
        &nbsp;&#8594;&nbsp;
        <div class="breadcrumbs__link breadcrumbs__name">{{ article['title'] }}</div>
    </div>
    <div>
        <div class="title-h2">{{ article['title'] }}</div>
        <pre class="desc desc--article" v-html="article['text']"></pre>
    </div>
</template>

<script>
export default {
    name: "Article",
    data() {
        return {
            article: [],
        }
    },
    methods: {
        getArticleId() {
            return this.$route.params.id
        },
        async getArticle(id) {
            const response = await axios.get(`/api/article/read/${id}`)
            this.article = response.data.data
        },
    },
    mounted() {
        this.getArticle(this.getArticleId())
    }
}
</script>

<style lang="sass">
    .desc--article
        & > p
            text-align: justify
            text-indent: 2rem
            margin: 10px 0
        & .image
            width: 100%
            padding: 10px
        & img
            max-width: 100%
        @media (max-width: 480px)
            & > p
                font-size: 8vw
</style>
