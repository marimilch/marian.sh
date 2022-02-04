<script setup lang="ts">
import MLink from './MLink.vue'
import Lerpy from './Lerpy.vue'

interface Props {
  title: string
  link: string
  suffix?: string
  github?: string | null
  year?: number | null
}

withDefaults(defineProps<Props>(), {
  suffix: '',
  github: null,
  year: null,
})
</script>

<template>
  <div class="project">
    <h3>{<span class="title">{{ title }}</span><span class="suffix">{{ suffix }}</span>} <span v-if="year" class="year">{{ year }}</span></h3>
    <p><slot></slot></p>
    <m-link 
      :href="link" 
      external
    >
      Open↗
    </m-link>
    <m-link v-if="github" :href="'https://github.com/' + github" external> GitHub↗ </m-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../vars.scss';
.project {
  width: 100%;
  margin-bottom: 40px;
}
h3 {
  &::after {
    content: '';
  }
}
.title {
  &::after {
    color: $highlight1;
    content: '.';
  }
}
.year {
  color: $highlight2;
}
span {
  text-transform: none;
}
</style>
