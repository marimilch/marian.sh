<template>
  <span><slot /></span>
</template>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    font-weight: 400;
  }
  5% {
    font-weight: 375;
  }
  20% {
    font-weight: 900;
  }
  30% {
    font-weight: 300;
  }
  40% {
    font-weight: 450;
  }
  50% {
    font-weight: 400;
  }
  100% {
    font-weight: 400;
  }
}

span {
  animation: pulse 1.5s linear 0s infinite normal;
}
</style>