<template>
  <div class="tag">
    <ul class="tag-items">
      <li v-for="item in tag" :key="item.id" class="tag-item">
        <nuxt-link :to="{name: 'tag-id', params:{id: item._id }}">
          {{ item.name }}
          <span>({{ item.count }})</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'Tags',
    transitions: 'fade',
    head: {
      title: 'Tags'
    },
    computed: {
      tag () {
        return this.$store.state.tag.data.list
      }
    },
}
</script>

<style scoped lang="scss">
.tag{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .tag-items{
    width: 50%;
    .tag-item{
      float: left;
      margin: .3rem;
    }
    a {
      display:block;
      padding: .4rem;
      color: #d3d3d3;
      text-decoration: none;
      &:hover {
        color: #d3d3d3;
      }
    }
  }
}


</style>