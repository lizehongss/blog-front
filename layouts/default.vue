<template>
  <div class="body">
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
.body{
  height: 100%;
}
.body_nav{
  height: 20%;
}
.body_container{
  height: 80%;
}
</style>

