<script setup lang="ts">
import MFrame from 'MFrame.vue'
</script>

<template>
<div>
  <slot></slot>
</div>
</template>

<style scoped>
div {
  padding: 30px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
