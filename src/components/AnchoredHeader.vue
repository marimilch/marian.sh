<script setup lang="ts">
import Hashtag from './icons/Hashtag.vue'
import Letterize from './Letterize.vue'
import Anime from './Anime.vue'
import OnVisible from './OnVisible.vue'
import anime from 'animejs'

import { computed, ref, defineProps } from 'vue'

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
    delay: anime.stagger(50),
  }
} )


defineProps<{ id: string }>()
</script>

<template>
  <on-visible @on-hidden="aniMode = 'hide'" @on-visible="aniMode = 'show'">
    <anime :animation="animation" target=".letter">
      <h2 :id="id"><span class="relative inline">
        <a 
          class="absolute text-highlight2 right-0 pr-1 mt-1.5" 
          :href="`#${id}`"
        ><hashtag class="h-4" /></a>
      </span><letterize style-each="display: inline-block"><slot /></letterize></h2>
    </anime>
  </on-visible>
</template>