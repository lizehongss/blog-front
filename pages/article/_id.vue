<template>
  <div v-html="articleContent" class="articleContent"> 
  </div> 
</template>
<script>
import markdown from '~/plugins/marked'
export default {
    name: 'MArticle',
    transitions: 'fade',
    fetch ({ store, params }) {
      console.log(params)
      return store.dispatch('article/getArt', params)
    },
    head () {
      return { title: `${this.$store.state.article.details.title}`}
    },
    computed: {
      article () {
        return this.$store.state.article.details
      },
      articleContent () {
        return markdown(this.article.content, false, true).html
      }
    }
}
</script>
<style lang="scss" scoped>
.articleContent {
  color: #fff;
}
</style>