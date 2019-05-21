<template>
  <div class="icon-wrap icon-effect">
    <a class="icon-style" :class="icon">text</a>
  </div>
</template>
<script>
export default {
  name: 'MyButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-wrap {
  text-align: center;
  margin: 0 auto;
  padding: 2em 0 3em;
}
.icon-style {
  background: rgba(255,255,255,0.1);
  transition: background 0.2s, color 0.2s;
  display: inline-block;
  font-size: 0px;
  cursor: pointer;
  margin: 15px 30px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  z-index:1;
  color: #fff;
}
.icon-style:after {
  top: -7px;
  left: -7px;
  padding: 7px;
  box-shadow: 0 0 0 4px #fff;
  transition: transform .2s, opacity .2s;
  transform: scale(.8);
  opacity: 0;

  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: '';
  box-sizing: content-box;
}
.icon-style:hover {
  background: rgba(255,255,255,1);
  color: #41ab6b;

  font-family: 'ecoicon';
  speak: none;
  font-size: 48px;
  line-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
}
.icon-style:hover:after {
  transform: scale(1);
  opacity: 1;
}
</style>


