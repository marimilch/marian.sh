<script setup lang="ts">
import CodeAppear from './CodeAppear.vue'
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
}>()
</script>

<template>
  <code-appear 
    :text="text"
    :start-delay="0"
    :char-delay="70"
    :show-cursor="false"
    :show-enter="false"
    :reserve-space="false"
  ></code-appear>
</template>