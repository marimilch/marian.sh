<script setup lang="ts">
import CodeAppear from './CodeAppear.vue'
import { defineProps } from 'vue'

const props = defineProps<{
  text: string,
  childClass?: string,
}>()
</script>

<template>
  <code-appear 
    :text="text"
    :start-delay="0"
    :char-delay="70"
    :show-cursor="false"
    :show-enter="false"
    :child-class="childClass"
    :reserve-space="false"
  ></code-appear>
</template>