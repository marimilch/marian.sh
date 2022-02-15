<script setup lang="ts">
import MLink from './MLink.vue'
import CodeAppearProject from './CodeAppearProject.vue'
import CodeAppear from './CodeAppear.vue'

import {computed} from 'vue'

interface Props {
  title: string
  link: string
  description: string,
  tags?: Iterable<string>,
  suffix?: string
  github?: string | null
  year?: number | null
}

const props = withDefaults(defineProps<Props>(), {
  suffix: '',
  github: null,
  tags: () => [],
  year: null,
})

let tagsAsString = computed( () => {
  let res = ''
  for (const tag of props.tags){
    res += `#${tag} `
  }

  return res
} )
</script>

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
    color: var(--highlight1);
    content: '.';
  }
}
span {
  text-transform: none;
}
</style>

<template>
  <div class="project">
    <h3 class="font-var-bold">
      {
        <span class="title"><code-appear-project :text="title"/></span>
        <span class="suffix"><code-appear-project :text="suffix"/></span>
      } 
      <span v-if="year" class="text-neutral opacity-50">
        <code-appear :show-cursor="false" :show-enter="false" :text="year.toString()"/>
      </span>
    </h3>
    <p><code-appear :char-delay="10" :show-enter="false" :text="description" :reserve-space="true"/></p>
    <p>
      <code-appear 
        class="text-neutral opacity-50 font-normal tags" 
        :char-delay="20" 
        :show-enter="false" 
        :show-cursor="false"
        :text="tagsAsString"
      />
    </p>
    <p>
      <m-link :href="link" external>
        <code-appear-project text=" OPEN↗ "/>
      </m-link> <m-link v-if="github" :href="'https://github.com/' + github" external>
        <code-appear-project text=" GITHUB↗ "/>
      </m-link>
    </p>
  </div>
</template>
