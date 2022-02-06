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
  color: var(--highlight1);
  font-variation-settings: 'wght' 400;
  background: transparent;
  transition: font-variation-settings .4s ease,
              background              .2s ease,
              box-shadow              .2s ease,
              color                   .2s ease;
  text-decoration: none;

  &::before {
    content: '[';
  }
  &::after {
    content: ']';
  }

  &:active, &:hover {
    font-variation-settings: 'wght' 900;
    font-style: italic;
    background: var(--highlight1);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.125);
    color: var(--d-background);
  }
}
</style>
