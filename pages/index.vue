<template>
  <section class="container">
    <div v-for="year in yearList" :key="year.year" class="art_years">
      <span class="art_year">{{ year.year }}</span>
      <div v-for="month in year.monthList" :key="month.month" class="art_months">
        <span class="art_month">{{ month.month | monthFilter }}</span>
        <div class="art_items">
          <div v-for="artList in month.articleList" :key="artList.title" ref="art_item" class="art_item">
            <nuxt-link :to="`/article/$(artList._id)`" class="art_item_link">
              {{ artList.title }} | {{ artList.create_at | dateFormat('MM.dd') }}
            </nuxt-link>
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
  filters: {
    monthFilter (val) {
      switch (val) {
        case 1: return 'January'
        case 2: return 'February'
        case 3: return 'March'
        case 4: return 'April'
        case 5: return 'May'
        case 6: return 'June'
        case 7: return 'July'
        case 8: return 'August'
        case 9: return 'September'
        case 10: return 'October'
        case 11: return 'November'
        case 12: return 'December'
      }
    }
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
    // this.init3D()
  },
  methods: {
    // init3D () {
    //   let artArry = this.$refs.art_item
    //   console.log(artArry)
    //   let artArryLength = artArry.length
    //   let unitDeg = 360/artArryLength
    //   Array.prototype.forEach.call(artArry, (it,i) => {
    //     it.style.transform = `rotateY(${i*unitDeg}deg) translateZ(280px)`
    //   })
    //   }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: #fff;
  opacity: 0.9;
  width: 50%;
  left: 25%;
  bottom: 10%;
  right: 0;
  position: absolute;
  border-radius: 5%;
}
.art_years {
  width: 100%;
  margin-top: 1em;
  > span {
    display: block;
    background: linear-gradient(to bottom right,rgba(150, 143, 143, 0),rgb(190, 189, 188));
    border-bottom: 1px solid #ddd;
    font-size: 1em;
  }
  .art_months {
    margin-top: 1em;
    .art_month {
      margin-top: 1em;
    } 
    .art_items {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .art_item {
        border-bottom: none;
        padding: 2em;
        &:hover {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
}
// .art_items {
// perspective: 5000px;
//   width: 200px;
//   height: 100px;
//   /* border: 1px solid #ddd; */
//   margin: 30px auto;
//   transform-style: preserve-3d;
//   animation: autoMove 12s infinite linear;
// }

// @keyframes autoMove {
//   from { }
//   to {
//     transform: rotateY(-360deg);
//   }
// }
// .art_items:hover {
//   animation-play-state: paused;
// }
// .art_item {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   height: 100px;
//   background: linear-gradient(to left,rgba(255,0,0,0), rgba(255,255,255,1));
//   opacity: .6s;
//   font-size: 20px;
//   line-height: 100px;
//   text-align: center;
//   position: absolute;
// }
.art_item_link {
  text-decoration: none;
  font-size: 10px;
  color: #000;
}
</style>
