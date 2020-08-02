<template>
  <div class="smart-item" v-if="width >0 && height> 0" :style="{ width: width + 'px', height: height + 'px' }">
    <div class="smart-item--bg">
      <div class="cornor cornor--top-left"></div>
      <div class="cornor cornor--top-right"></div>
      <div class="cornor cornor--bottom-right"></div>
      <div class="cornor cornor--bottom-left"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['width', 'height']
}
</script>

<style>
  .smart-item {
    border-width: 1px;
    border-style: solid;
    border-color: #21F0F1;
    box-shadow:0 0 10px rgba(33, 240, 241,0.4);
    position: relative;
    padding: 24px;
    position: relative;
  }

  .smart-item--bg {
    box-shadow: inset 0 0 12px rgba(33, 240, 241,0.4);
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    /* z-index: -1; */
  }

  .cornor {
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 2px;
  }

  .cornor--top-left {
    top: 0;
    left: 0;
    border-top: 3px solid #21F0F1;
    border-left: 3px solid #21F0F1;
  }

  .cornor--top-right {
    top: 0;
    right: 0;
    border-top: 3px solid #21F0F1;
    border-right: 3px solid #21F0F1;
  }

  .cornor--bottom-right {
    bottom: 0;
    right: 0;
    border-bottom: 3px solid #21F0F1;
    border-right: 3px solid #21F0F1;
  }

  .cornor--bottom-left {
    bottom: 0;
    left: 0;
    border-bottom: 3px solid #21F0F1;
    border-left: 3px solid #21F0F1;
  }

</style>

