<script setup lang="ts">
import Letterize from './Letterize.vue'
import Anime from './Anime.vue'
import OnVisible from './OnVisible.vue'
import anime from 'animejs'

import { computed, ref, defineProps } from 'vue'

interface Props {
  appearDelay?: number
}

const props = withDefaults(defineProps<Props>(),
{
  appearDelay: 0,
})

let aniMode = ref( 'hide' )

let animation = computed( () => {
  if (aniMode.value === 'hide') return {
    opacity: 0,
    translateY: -36,
    duration: 0,
    delay: 0,
  }

  if (aniMode.value === 'show') return {
    opacity: 1,
    translateY: 0,
    duration: 500,
    delay: anime.stagger(50, {start: props.appearDelay}),
  }
} )
</script>

<template>
  <on-visible @on-visible="aniMode = 'show'">
    <anime :animation="animation" target=".letter">
      <letterize style-each="display: inline-block">
        <slot />
      </letterize>
    </anime>
  </on-visible>
</template>