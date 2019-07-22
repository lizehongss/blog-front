<template>
  <section class="container">
    <div v-for="year in yearList" :key="year.year" class="art_years">
      <span class="art_year">{{ year.year }}</span>
      <div v-for="month in year.monthList" :key="month.month" class="art_months">
        <span class="art_month">{{ month.month }}</span>
        <div class="art_items">
          <div v-for="artList in month.articleList" :key="artList.title" ref="art_item" class="art_item">
            <span>{{ artList.title }}</span>
          </div>
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
    this.init3D()
  },
  methods: {
    init3D () {
      let artArry = this.$refs.art_item
      console.log(artArry)
      let artArryLength = artArry.length
      let unitDeg = 360/artArryLength
      Array.prototype.forEach.call(artArry, (it,i) => {
        it.style.transform = `rotateY(${i*unitDeg}deg) translateZ(280px)`
      })

      console.log(artArry)
      }
  }
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
.art_years {
  display: flex;
  justify-content: center;
  align-items: center;
}
.art_months {
  perspective: 5000px;
}
.art_items {
  width: 200px;
  height: 100px;
  /* border: 1px solid #ddd; */
  margin: 200px auto;
  transform-style: preserve-3d;
  animation: autoMove 12s infinite linear;
}

@keyframes autoMove {
  from { }
  to {
    transform: rotateY(-360deg);
  }
}
.art_items:hover {
  animation-play-state: paused;
}
.art_item {
  width: 200px;
  height: 100px;
  background-color:#fff;
  color: #000;
  opacity: .6s;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  position: absolute;
}
</style>
