<template>
  <div class="tagArticle">
    <div class="tagArticle_title">
      {{ tag.name }}
    </div>
    <div class="tagArticle_content">
      <div v-for="item in list" :key="item._id" class="article_item">
        <div class="article_item_content">
          <p class="title">
            <nuxt-link :to="{name: 'article-id', params: {id: item._id}}" class="title_link">
              {{ item.title }}
            </nuxt-link>
          </p>
          <p class="abstrack">
            {{ item.descript | text(200) }}
          </p>
          <div class="meta">
            <span class="time">{{ item.create_at | dateFormat('yyyy.MM.dd') }}</span>
            <span class="hr"></span>
            <span class="read">{{ item.meta.views }} 次阅读</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagArticle',
  transitions: 'fade',
  computed: {   
    list() {
      return this.$store.state.article.art.list
    },
    currentPage() {
      return this.$store.state.article.art.pagination.currentPage_page
    },
    tag() {
      const _id = this.$route.params.id
      return this.$store.state.tag.data.list.find(item => item._id ===_id)
    }
  },
  head () {
      return { title: `${this.tag.name} | tag`}

  },
  fetch ( { store, params} ) {
    return store.dispatch('article/getArtList', {
      tag: params.id,
      page_size: 20
    })
  }
}
</script>
<style lang="scss" scoped>
  .tagArticle {
    color: $text-color;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    &_title {
        width: 50%;
        font-weight: 500;
        font-size: 18px;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ddd;
    }
    &_content{
        width: 50%;
      .article_item_content{
        margin-bottom: 2rem;
          .title{
            font-size: $font-size-large;
            &_link{
              text-decoration: none;
              color: #fff;
            }
          }
          .abstrack{

          }
          .meta{
            color: $descript;
            .hr{
              display: inline-block;
              width: 2px;
              height: 2px;
              background: #aab2bd;
              margin: 4px .6rem;
            }
          }
      }
    }
  }

</style>