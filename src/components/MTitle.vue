<script setup lang="ts">
import Letterize from './Letterize.vue'
import Anime from './Anime.vue'
import MFrame from './MFrame.vue'
import OnVisible from './OnVisible.vue'
import CodeAppear from './CodeAppear.vue'
import anime from 'animejs'
import BlinkCursor from './BlinkCursor.vue'

import { computed, ref } from 'vue'

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
    delay: anime.stagger(50, {start: 500}),
  }
} )
</script>

<template>
  <m-frame>
    <div class="flex justify-start">
      <div class="grow-0 shrink-1 basis-0">
        <span class="text-highlight1 align-right pr-1">$></span>
      </div>
      <div class="grow-1">
        <code-appear @enter-pressed="aniMode = 'show'" text="marian.sh"/>
        <div>
          <on-visible @on-hidden="aniMode = 'hide'">
            <anime :animation="animation" target=".letter">
              <letterize style-each="display: inline-block">
                <h1><span>hi, I'm </span><br><span>Marian</span><span> <br>and I <br>develop <br></span><span>Software</span></h1>
              </letterize>
            </anime>
          </on-visible>
        </div>
      </div>
    </div>

      
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
