<template>
  <nav class="nav">
    <ul>
      <li class="current">
        <nuxt-link class="to_router" to="/">
          首页
        </nuxt-link>
      </li>  
      <li>
        <nuxt-link class="to_router" to="/about">
          about
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="to_router" to="/demo">
          作品
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="to_router" to="/">
          首页
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="to_router" to="/">
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
    position: relative;
    list-style: none;
    text-decoration: none;
    padding: 10px;
    .to_router {
      text-decoration: none;
      color: #fff;
    }
  }
  li::before {
    content: "";
    position: absolute;
    transition: 0.2s all linear;
    top:0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #fff;
    z-index: -1;
  }
  li:hover::before{
    left: 0;
    width: 100%;
  }
  li:hover ~ li::before {
    left: 0;
  }
}

</style>