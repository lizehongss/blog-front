<template>
  <section class="container">
    <div v-for="(year,index) in yearList" v-show="yearIndex === index" :key="year.year" class="art_years">
      <span class="art_year">{{ year.year }}</span>
      <div v-for="month in year.monthList" :key="month.month" class="art_months">
        <span class="art_month">{{ month.month | monthFilter }}</span>
        <div class="art_items">
          <div v-for="artList in month.articleList" :key="artList.title" ref="art_item" class="art_item">
            <nuxt-link :to="{name: 'article-id', params:{id: artList._id}}" class="art_item_link">
              {{ artList.title }} | {{ artList.create_at | dateFormat('MM.dd') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div v-show="yearIndex != 0" class="lastYear" @click="changeYearIndex('last')">
      下个精彩
    </div>
    <div v-show="yearIndex != yearList.length-1" class="nextYear" @click="changeYearIndex('next')">
      上个回忆
    </div>
  </section>
</template>
<script>
export default {
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
      articleList: [],
      yearIndex: 0  
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
  methods: {
    changeYearIndex(sign) {
      
      if (sign === 'last') {
        this.yearIndex -=1
      } else {
        this.yearIndex +=1
      }
    }
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
  width: 50%;
  left: 25%;
  bottom: 10%;
  right: 0;
  position: absolute;
  border-radius: 3%;
  overflow: auto;
  color: #fff;
  .lastYear, .nextYear{
    position: absolute;
    bottom: 1em;
    cursor: pointer;
    border-bottom: 1px solid #fff;
  }
  .lastYear{
    left: 0em
  }
  .nextYear{
    right: 0em;
  }
}
.art_years {
  width: 100%;
  margin-top: 1em;
  > span {
    display: block;
    font-size: 2em;
  }
  .art_months {
    margin-top: 1em;
    .art_month {
      margin-top: 1em;
      font-size: 1.5em;
    } 
    .art_items {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .art_item {
        border-bottom: 1px solid #fff;
        margin: 1em;
      }
    }
  }
}
.art_item_link {
  text-decoration: none;
  font-size: 1em;
  color: #fff;
}
</style>
