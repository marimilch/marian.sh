<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import anime from 'animejs'
import LooseObject from '../ts/loose-object'

export default defineComponent({
  props: {
    target: {
      type: String,
      default: ''
    },
    animation: {},
  },
  data() {
    return {
      enabled: false,
    }
  },
  computed: {
    animationT(){
      const a = this.animation as LooseObject
      const root = this.$refs.root as Element
      if (!root) return a

      a.targets = this.target ? 
        root.querySelectorAll(this.target) 
        : root

      a.complete = () => {
        console.log('animation complete')
        this.$emit('animationComplete')
      }
      a.complete.bind(this)

      return a
    }
  },
  methods: {
    deepClone(original: LooseObject): LooseObject
    {
      return JSON.parse(JSON.stringify(original))
    },
    animate(): void
    {
      anime(this.animationT)
    }
  },
  mounted() {
    this.$nextTick( function(){
      this.enabled = true
    } )
  },
  watch: {
    enabled(newVal: boolean): void
    {
      if (!this.enabled) return
      this.animate()
    },
    animation(): void
    {
      this.animate()
    }
  }
})
</script>

<template>
<div ref="root">
  <slot></slot>
</div>
</template>