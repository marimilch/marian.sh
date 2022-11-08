<script setup lang="ts">
import { defineProps, computed, ref, defineEmits } from 'vue'
import { wait } from '../ts/helpers'
import EnterIcon from './icons/Enter.vue'

import OnVisible from './OnVisible.vue'
import BlinkCursor from './BlinkCursor.vue'

interface Props {
  text: string,
  startDelay?: number,
  charDelay?: number,
  endDelay?: number,
  disappearDelay?: number,
  showCursor?: boolean,
  showEnter?: boolean,
  reserveSpace?: boolean,
  charStep?: number,
  childClass?: string,
}

const props = withDefaults(defineProps<Props>(), {
  startDelay: 500,
  charDelay: 50,
  endDelay: 500,
  disappearDelay: 500,
  showCursor: true,
  showEnter: true,
  reserveSpace: true,
  charStep: 1,
  childClass: '',
})

const emit = defineEmits(['initialized', 'animationBegin', 'animationDone', 'enterPressed'])

let len = ref(0)
let done = ref(false)
let typingStarted = computed( () => len.value > 0 )
let visibleBlink = ref(true)
let currentText = computed( () => props.text.slice(0, len.value) )
let contraText = computed( () => props.text.slice(len.value, props.text.length) )

async function run() {
  emit('initialized')
  await wait(props.startDelay)
  emit('animationBegin')
  while (len.value < props.text.length) {
    await wait(props.charDelay)
    if (len.value + props.charStep >= props.text.length) {
      len.value = props.text.length
      continue
    }
    len.value += props.charStep
  }
  await wait(props.endDelay)
  done.value = true
  emit('enterPressed')
  await wait(props.disappearDelay)
  visibleBlink.value = false
  emit('animationDone')
}

function reset() {
  done.value = false
  visibleBlink.value = true
  len.value = 0
}
</script>

<template>
<span>
  <on-visible @on-visible="run" class="inline">
    <span v-if="!typingStarted" class="placeholder opacity-0 inline-block w-0">
      a
    </span>
    <span :class="childClass">
      {{ currentText }}<enter-icon v-if="done && showEnter" class="mt-1.5 absolute enter-icon inline h-4 text-neutral" /><br 
        v-if="done && showEnter"
      /><blink-cursor
        v-if="showCursor"
        :font-height="22" 
        class="absolute pointer-none transition-opacity" 
        :class="visibleBlink ? '' : 'opacity-0'"
      /><span
        v-if="reserveSpace"
        class="opacity-0 pointer-events-none"
      >{{ contraText }}</span>  
    </span>   
  </on-visible>
</span>
</template>

<style scoped>
@keyframes disappear {
  from {
    opacity: .5;
  }
  to {
    opacity: 0;
  }
}
  .enter-icon {
    animation: disappear .5s ease 1 normal; 
    opacity: 0;
  }
</style>

