<template>
  <div class="articleList">
    <div class="articleCont">
      <h3 class="articleTitle">
        {{ article.title }}
      </h3>
      <div class="meta">
        <span class="time">{{ article.create_at | dateFormat('yyyy.MM.dd hh:mm') }} | </span>
        <span class="num">字数 {{ article.content.length }} | </span>
        <span class="view">阅读 {{ article.meta.views }}</span>
      </div>
    </div>
    <div class="articleContent" v-html="articleContent" /> 
    <div class="articleToc">
      <span class="articleTitle" v-if="articleToc.length">目录</span>
      <a :href='item.anchor' v-for="item in articleToc" :key="item.anchor" class="articleTocItem" :style="tocItemStyle(item.level)">
        {{ item.text }}
      </a>
    </div>
  </div>
</template>
<script>
import markdown from '~/plugins/marked'
export default {
    name: 'MArticle',
    transitions: 'fade',
    computed: {
      article () {
        return this.$store.state.article.details
      },
      articleContent () {
        return markdown(this.article.content, false, true).html
      },
      articleToc () {
        return markdown(this.article.content, false, true).toc
      }
    },
    methods: {
      tocItemStyle(level) {
        return level === 1 ? {
          marginLeft: level*10 + 'px',
          color:'#fff'
        } : 
        {
          marginLeft: level*10 + 'px'
        }
      }
    },
    head () {
      return { title: `${this.$store.state.article.details.title}`}
    },
    fetch ({ store, params }) {
      console.log(params)
      return store.dispatch('article/getArt', params)
    },

}
</script>
<style lang="scss">
.articleList {
  background-color: $articleBgColor;
  color: $text-color;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  .articleCont{
    .articleTitle{
      font-size: $font-size-title;
    }
    .meta{
      color: $descript;
    } 
  }
  .articleContent {
    width: 50%;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1.5rem 0;
      padding-left: 0;
      line-height: 1.8rem;
      font-weight: 700;
      text-indent: 0;
        &:target{
          padding-top: 4.5rem;
        }
      }
    ol, p {
      // margin-left: 1rem;
    }
    pre {
      margin: 1.5rem 0;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: $code-bg;
      border-radius: 3px;
      word-wrap: normal;
      >code {
        margin: 0;
        padding: 1rem;
        float: left;
        width: 95%;
        height: 100%;
        display: block;
        line-height: 1.6rem;
        background-color: transparent;
        color: $text;
      }
    }
  }
  .articleToc {
    position: fixed;
    right: 0;
    top: 15em;
    width: 20%;
    .articleTitle {
      display: inline-block;
      margin-bottom: 1em;
      color: $white;
    }
    .articleTocItem {
      display: block;
      margin-bottom: .5em;
      color: $text;
      text-decoration: none;
    }
  }
}


</style>