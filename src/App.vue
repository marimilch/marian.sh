<script setup lang="ts">
import MTitle from './components/MTitle.vue'
import MFrame from './components/MFrame.vue'
import 'normalize.css'
</script>

<template>
  <m-title></m-title>
  <m-frame>
    <h2>Professional <br>Work</h2>
  </m-frame>
</template>

<style lang="scss">
@font-face {
  font-family: Major Mono Display;
  src: url(./assets/fonts/Major_Mono_Display/MajorMonoDisplay-Regular.ttf) format('truetype');
}
h1, h2, h3, h4, h5, h6 {
  font-family: Major Mono Display, monospace;
  font-style: normal;
  font-weight: normal;
  color: #454545;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &::after {
    content: '.';
    color: #FF00B8;
  }
}
h1 {
  font-size: 36px;
  line-height: 36px;
}
h2 {
  font-size: 24px;
  line-height: 24px;
}
div {
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
