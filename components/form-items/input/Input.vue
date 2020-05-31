<template>
  <div class="input">
    <label>
      <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        @input="inputHandler"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      inputHandler({ target: { value } }) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .input {
    padding: 0 10px;
    background: transparent;
    border: none;
    transition: opacity 0.3s $animationEasing;
  }
  .input input {
    display: block;
    width: 100%;
    background: transparent;
    border: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 45px;
    height: 45px;
  }
  .input input::-webkit-input-placeholder {opacity: 1; text-indent: 0; color: $color-gray-dark; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input::-moz-placeholder {opacity: 1; text-indent: 0; color: $color-gray-dark; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:-moz-placeholder {opacity: 1; text-indent: 0; color: $color-gray-dark; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:-ms-input-placeholder {opacity: 1; text-indent: 0; color: $color-gray-dark; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus::-webkit-input-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus::-moz-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus:-moz-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus:-ms-input-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
</style>
