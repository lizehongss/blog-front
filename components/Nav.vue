<template>
  <nav class="nav">
    <ul>
      <li class="current">
        <nuxt-link to="/">
          首页
        </nuxt-link>
      </li>  
      <li>
        <nuxt-link to="/">
          首页
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          首页
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          首页
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          首页
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Nav',
  props: {
    
  }
}
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
  margin: 20px 0;
  li {
    display: inline-block;
    list-style: none;
  }
}

</style>