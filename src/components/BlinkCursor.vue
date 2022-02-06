<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ fontHeight: number }>()
</script>

<template>
  <div class="inline-block">
    <div 
      class="blink-cursor bg-neutral rounded-sm" 
      :style="`height: ${fontHeight}px; width: ${0.741 * fontHeight}px;`"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@keyframes opacityCubic {
    0% { opacity: 0; } 
   10% { opacity: 0.004; } 
   20% { opacity: 0.032; } 
   30% { opacity: 0.108; } 
   40% { opacity: 0.256; } 
   50% { opacity: 0.5; } 
   60% { opacity: 0.744; } 
   70% { opacity: 0.892; } 
   80% { opacity: 0.968; } 
   90% { opacity: 0.996; } 
  100% { opacity: 1; } 
}
.blink-cursor {
  animation-name: opacityCubic;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: .5s;
}
</style>