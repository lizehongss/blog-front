<template>
  <section class="container">
    <div>
      <MyButton />
    </div>
  </section>
</template>
<script>
// import Logo from '~/components/Logo.vue'
import MyButton from '~/components/MyButton.vue'
import api from '~/api/index.js'

export default {
  components: {
    MyButton
  },
  async mounted () {
    let data = {
      current_page: 7
    }
    const res = await api.getArts({ ...data, page_size: data.page_size ||6})
    console.log(res)

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
