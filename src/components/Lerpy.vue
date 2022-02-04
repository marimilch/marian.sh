<script lang="ts">
import { defineComponent } from 'vue'
import { TimedFrames } from '../ts/timed-frames'

interface LerpyData {
  dy: number,
  lastScrollPosition: number,
  scrollTarget: Element,
  timedFrames: TimedFrames | null,
  minDelta: number,
  prec: number,
  enabled: boolean,
}

export default defineComponent({
  props: {
    lerpSpeed: {
      default: 4.5,
      type: Number
    },
    scrollWithStrength: {
      default: .2,
      type: Number
    },
    deltaMax: {
      default: 400,
      type: Number
    },
    childClass: {
      default: '',
      type: String
    },
    childStyle: {
      default: '',
      type: String
    }
  },
  computed: {
    tenPow(): number {
      return Math.pow(10, this.prec)
    },
    tenNegPow(): number {
      return Math.pow(10, -this.prec)
    }
  },
  data(){
    return {
      dy: 0,
      lastScrollPosition: 0,
      scrollTarget: document.querySelector('html'),
      timedFrames: null,
      minDelta: 2,
      prec: 2,
      enabled: false
    } as LerpyData
  },
  mounted(){
    if (this.scrollWithStrength === 0) return
    this.enabled = true

    this.$nextTick(function(){
      this.timedFrames = new TimedFrames(this.renderCascade.bind(this))
      this.timedFrames.requestFrame()

      const observer = new IntersectionObserver(
        this.onIntersect, 
        {
          rootMargin: '0px',
          threshold: 0,
        }
      )

      observer.observe(this.$el)
    })
  },
  methods: {
    onIntersect(entries: Array<IntersectionObserverEntry>): void {
      for (const entry of entries) {
        if (entry.isIntersecting) this.setVisible()
        else this.setHidden()
      }
    },
    setVisible(){
      this.enabled = true
    },
    setHidden(){
      this.enabled = false
    },
    precision(x: number){
      const x_ = Math.round( x * this.tenPow ) / this.tenPow

      return x_
    },
    renderCascade(dt: number){
      if (!this.timedFrames) return

      if (!this.enabled){
        this.timedFrames.requestFrame()
        return
      }

      const currentScrollTop = this.scrollTarget.scrollTop
      const scrollDelta = currentScrollTop - this.lastScrollPosition
      let dy_ = this.dy

      dy_ += scrollDelta * this.scrollWithStrength
      dy_  = Math.sign(dy_) * Math.min(Math.abs(dy_), this.deltaMax)

      dy_ = dy_ / (1 + this.lerpSpeed * dt)
      dy_ = this.precision(dy_)

      if ( Math.abs(dy_) < this.tenNegPow){
        dy_ = 0
      }

      this.dy = dy_

      this.lastScrollPosition = currentScrollTop

      this.timedFrames.requestFrame()
    }
  }
})
</script>

<template>
    <div ref="target">
        <div 
            :class="childClass" 
            ref="content" 
            :style="`transform: translateY(${dy}px); ${childStyle}`"
        >
            <slot></slot>
        </div>
    </div>
</template>