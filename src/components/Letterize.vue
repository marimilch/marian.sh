<script lang="ts">
import { ref, onMounted } from 'vue'
import Letterize from 'letterizejs'
import LooseObject from '../ts/loose-object'

export default {
  props: {
    styleEach: {
      type: String,
      default: '',
    }
  },
  setup(props: LooseObject) {
    const root = ref(null)

    onMounted(() => {
      if (root.value === null) return
      const root_ = root.value as Element
      const l = new Letterize({
        targets: root.value,
        className: 'letter',
      })

      console.log('props', props)

      const ls = root_.querySelectorAll('.letter')

      for (const l of Array.from(ls)){
        const l_ = l as HTMLElement
        l_.setAttribute('style', props.styleEach)
      }
    })

    return {
      root
    }
  }
}

</script>

<template>
<span ref="root">
  <slot></slot>
</span>
</template>