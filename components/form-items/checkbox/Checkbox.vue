<template>
  <div
    class="checkbox"
    :class="[
      value && 'checkbox_active',
    ]"
    @click="clickHandler"
  >
    <div class="checkbox__icon">
      <CheckboxIcon />
    </div>
    <div class="checkbox__label">
      <slot />
    </div>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle';
  import CheckboxIcon from '~/assets/svg/checkbox-icon.svg';

  export default {
    name: 'Checkbox',
    components: {
      CheckboxIcon,
    },
    props: {
      value: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    methods: {
      clickHandler: throttle(function() {
        const { value } = this;
        this.$emit('input', !value);
      }, 300),
    },
  };
</script>

<style lang="scss" scoped>
  .checkbox {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    cursor: pointer;
  }
  .checkbox__icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background: $background-start;
    overflow: hidden;
  }
  .checkbox__icon svg {
    display: block;
    width: 12px;
    margin: 0 auto;
    color: $color-orange;
    opacity: 0;
    transform: scale(2);
    transition: opacity 0.1s $animationEasing, transform 0.1s $animationEasing;
  }
  .checkbox_active .checkbox__icon svg {
    transform: scale(1);
    opacity: 1;
  }
  .checkbox__label {
    display: block;
    font-size: 15px;
    margin-left: 15px;
    line-height: 20px;
    color: $color-gray-light;
    width: calc(100% - 24px - 15px);
  }
</style>
