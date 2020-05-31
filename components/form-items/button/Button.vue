<template>
  <div
    class="button"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      clickHandler() {
        this.$emit('click');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .button {
    display: block;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: $background-stop;
    background-color: $color-white;
    text-align: center;
    cursor: pointer;
  }
</style>
