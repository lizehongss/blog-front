<template>
  <div class="about">
    <div class="about_blog">
      <h2>About blog</h2>
      <p>前端展示: Nuxt</p>
      <p>文章管理: iview + vue</p>
      <p>后台: koa</p>
      <p>数据库: MongoDb</p>
    </div>
    <div class="about_me">
      <h2>About me</h2>
      <p>前端小白,慢慢学习中...</p>
    </div>
    <div class="contact me">
      <h2>Contact me</h2>
      <p>邮箱地址: 1822336242@qq.com</p>
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


