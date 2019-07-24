<template>
  <div>
    <Nav class="body_nav" />
    <nuxt class="body_container" />
  </div>
</template>
<script>
import Nav from '~/components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>
<style>
.body_nav{
  height: 20%;
}
.body_container{
  height: 80%;
}
</style>

