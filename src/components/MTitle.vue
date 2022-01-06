<script setup lang="ts">
import MFrame from './MFrame.vue'
</script>

<template>
  <m-frame>
    <h1>hi, I'm <br><span>Marian</span> <br>and I <br>develop <br><span>Software</span></h1>
  </m-frame>
</template>

<style scoped>
div {
  width: 100%;
}
h1 {
  text-transform: lowercase;
}
span {
  text-transform: none;
}
</style>
