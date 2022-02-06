<script setup lang="ts">
import Letterize from './Letterize.vue'
import Anime from './Anime.vue'
import MFrame from './MFrame.vue'
import OnVisible from './OnVisible.vue'
import CodeAppear from './CodeAppear.vue'
import anime from 'animejs'
import BlinkCursor from './BlinkCursor.vue'

import { computed, ref } from 'vue'
import HeaderAnimated from './HeaderAnimated.vue'
import CodeAppearProject from './CodeAppearProject.vue'
import Pulse from './Pulse.vue'

</script>

<template>
  <m-frame>
    <div>
      <div class="flex justify-start">
        <div class="grow-0 shrink-1 basis-0">
          <span class="text-highlight1 align-right pr-1">$></span>
        </div>
        <div class="grow-1">
          <code-appear class="text-highlight2" text="marian.sh"/>
          <div>
            <header-animated :appear-delay="1700">
              <h1><span>hi, I'm </span><br><span>Marian</span><span> <br>and I <br>develop <br></span><span>Software</span></h1>
            </header-animated>
          </div>
        </div>
      </div>

      <div class="flex justify-start">
        <div class="grow-0 shrink-1 basis-0 opacity-0">
          <span class="text-highlight1 align-right pr-1">$></span>
        </div>
        <div class="grow-1">
          <pulse>
            <code-appear 
              class="text-highlight2"
              :start-delay="2500"
              text="↓ scroll ↓"
              :show-cursor="false"
              :show-enter="false"
            />
          </pulse>
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
