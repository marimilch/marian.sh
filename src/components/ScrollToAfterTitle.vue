<script setup>
import MLink from './MLink.vue'
import CodeAppear from './CodeAppear.vue'
import Pulse from './Pulse.vue'

const TARGET = '.professional-projects'

function scrollToTarget(){
  const target = document.querySelector(TARGET)
  if (!target) {
    console.warn('Could not scroll', TARGET, 'into view. Target not found.')
  }

  const rect = target.getBoundingClientRect()
  window.scroll({
    top: rect.top,
    // left: 100,
    behavior: 'smooth'
  })
}

</script>

<template>
<m-link @click="scrollToTarget"><pulse>
  <code-appear 
    :start-delay="2500"
    text=" scroll↓ "
    :show-cursor="false"
    :show-enter="false"
    :reserve-space="false"
  />
</pulse></m-link>
</template>