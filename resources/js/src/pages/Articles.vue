<template>
    <div class="articles">
        <h2 class="title-h2">Статьи</h2>
        <div v-for="article in articles">
            <article-item :article="article"/>
        </div>
    </div>
</template>

<script>
import ArticleItem from "@/src/components/Article/ArticleItem.vue";
export default {
    name: "Articles",
    components: {ArticleItem},
    data() {
        return {
            articles: []
        }
    },
    methods: {
        async getArticles() {
            const response = await axios.get('/api/article/read')
            this.articles = response.data.data
        }
    },
    mounted() {
        this.getArticles()
    }
}
</script>
