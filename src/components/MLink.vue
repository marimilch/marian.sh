<script setup lang="ts">
interface Props {
  external?: boolean
}

withDefaults(defineProps<Props>(), {
  external: false
})
</script>

<template>
<a :target="external ? '_blank' : ''">
  <slot></slot>
</a>
</template>

<style lang="scss" scoped>
@import '../vars.scss';
a {
  text-transform: uppercase;
  color: $highlight1;
  font-weight: 400;
  background: transparent;
  transition: font-weight .4s ease,
              background  .2s ease,
              color       .2s ease;
  text-decoration: none;

  &::before {
    content: '[';
  }
  &::after {
    content: ']';
  }

  &:active, &:hover {
    font-weight: 900;
    font-style: italic;
    background: $highlight1;
    color: $background;
  }
}
</style>
