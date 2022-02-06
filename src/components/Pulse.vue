<template>
  <span><slot /></span>
</template>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    font-variation-settings: 'wght' 400;
  }
  5% {
    font-variation-settings: 'wght' 375;
  }
  20% {
    font-variation-settings: 'wght' 900;
  }
  30% {
    font-variation-settings: 'wght' 300;
  }
  40% {
    font-variation-settings: 'wght' 450;
  }
  50% {
    font-variation-settings: 'wght' 400;
  }
  100% {
    font-variation-settings: 'wght' 400;
  }
}

span {
  animation: pulse 1.5s linear 0s infinite normal;
  letter-spacing: 0 !important;
}
</style>