<template>
  <section class="container">
    <div v-for="year in yearList" :key="year.year">
      {{ year.year }}

      <div v-for="month in year.monthList" :key="month">
         {{ month.month }}
         <div v-for="articleList in month.articleList" :key="articleList">
           {{ articleList.title }}
         </div>
      </div>
    </div>
  </section>
</template>
<script>
// import Logo from '~/components/Logo.vue'
// import MyButton from '~/components/MyButton.vue'

export default {
  // components: {
  //   MyButton
  // },
  name: 'SiteMap',
  scrollToTop: true,
  transition: 'fade',
  head: {
    title: 'sitemap'
  },

  data () {
    return {
      articleList: []
    }
  },
  computed: {
    yearList () {
      return this.$store.state.sitemap.art
    }
  },
  fetch ({ store }) {
    return store.dispatch('sitemap/getSitemap', {page_size: 1000})
  },

  mounted () {
    console.log(this.$store.state.sitemap.art)
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
