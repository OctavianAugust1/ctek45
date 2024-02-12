<template>
    <div class="article">
        <span class="article__name">{{ article.title }}</span>
        <div class="article__buttons">
            <router-link class="link button article__button" :to="'/article/' + article.id">Читать далее...</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleItem",
    props: {
        article: Object
    }
}
</script>

<style lang="sass">
    .article
        border: solid 1px black
        border-radius: 20px
        box-shadow: 0 0 2px black
        min-height: 100px
        padding: 20px
        margin: 20px 0
        display: flex
        flex-flow: row nowrap
        justify-content: space-between
        align-items: center

    .article__button
        width: unset !important
        white-space: nowrap

    .article__buttons
        display: flex
        flex-flow: row nowrap
        justify-content: flex-end
        & > *:not(:first-child)
            margin-left: 8px

    .desc--article
        &> p
            text-align: justify
            text-indent: 2rem
            margin: 10px 0
        &.image
            width: 100%
            padding: 10px
        & img
            max-width: 100%

    .form-box__input-text--article
        width: 100%
        font-size: 1.5rem
        font-weight: bold
</style>
