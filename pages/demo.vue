<template>
  <div class="demo-show">
    <!-- <div class="demo"></div> -->
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      demoList:[{
        name: 'textdemo',
        desecrip: 'textext',
        url: 'url',
        keys: ['one','two', 'three'],
        img: ''
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-show {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .demo{
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
  }
  .demo::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
  }
  .demo:hover {
    transform: scale(1.2, 1.2);
  }
  .demo:hover::after {
    opacity: 1;
  }
}
</style>

