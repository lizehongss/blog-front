<template>
  <div class="about">
    <div class="about_blog">
      <h2>About blog</h2>
      <p>前端展示: Nuxt</p>
      <p>文章管理: iview + vue</p>
      <p>后台: koa</p>
      <p>数据库: MongoDb</p>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
 .about{
   color: $text-color;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   margin-left: 5rem;
   margin-top: 5rem;
   h2 {
     border-bottom: 1px solid #ddd;
     margin-bottom: 2rem;
   }
 }
</style>


