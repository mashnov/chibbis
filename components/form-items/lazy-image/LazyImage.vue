<template>
  <div
    class="lazy-image"
    :class="imageIsVisible && 'lazy-image__visible'"
    :style="imagePaddingBottom"
  >
    <div
      v-show="loaderIsVisible"
      class="lazy-image__loader"
    />
    <div
      v-show="stubIsVisible"
      class="lazy-image__stub"
    >
      <StubImage />
    </div>
    <transition
      name="lazy-image"
      appear
    >
      <img
        v-show="imageIsVisible"
        :src="src"
        :alt="alt"
        @load="imageLoadHandler"
        @error="imageErrorHandler"
      />
    </transition>
  </div>
</template>

<script>
  import StubImage from '~/assets/svg/image-stub.svg';

  export default {
    name: 'LazyImage',
    components: {
      StubImage,
    },
    props: {
      height: {
        type: [String, Number],
        default: '1',
      },
      width: {
        type: [String, Number],
        default: '1',
      },
      src: {
        type: String,
        required: true,
        default: '',
      },
      alt: {
        type: String,
        required: true,
        default: '',
      },
    },
    data() {
      return {
        loaderIsVisible: true,
        imageIsVisible: false,
        stubIsVisible: false,
      };
    },
    computed: {
      parsedHeight() {
        const { height } = this;
        return parseInt(height);
      },
      parsedWidth() {
        const { width } = this;
        return parseInt(width);
      },
      imageProportion() {
        const { parsedHeight, parsedWidth } = this;
        return (parsedHeight * 100) / parsedWidth;
      },
      imagePaddingBottom() {
        const { imageProportion } = this;
        const paddingBottom = `${imageProportion}%`;
        return { paddingBottom };
      },
    },
    watch: {
      src() {
        this.imageUpdateHandler();
      },
    },
    methods: {
      imageLoadHandler() {
        this.loaderIsVisible = false;
        this.imageIsVisible = true;
        this.stubIsVisible = false;
      },
      imageErrorHandler() {
        this.loaderIsVisible = false;
        this.imageIsVisible = false;
        this.stubIsVisible = true;
      },
      imageUpdateHandler() {
        this.loaderIsVisible = true;
        this.imageIsVisible = false;
        this.stubIsVisible = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .lazy-image {
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .lazy-image__loader,
  .lazy-image__stub {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $color-gray-super-light;
  }
  .lazy-image__loader:before,
  .lazy-image__loader:after {
    content: '';
    display: block;
    height: 0;
    width: 30%;
    border-radius: 50%;
    padding-bottom: 30%;
    background: $color-gray-light;
  }
  .lazy-image__loader:before {
    margin: auto -5% auto auto;
    animation: load-reverse 1s linear infinite;
  }
  .lazy-image__loader:after {
    margin: auto auto auto -5%;
    animation: load 1s linear infinite;
  }
  .lazy-image__stub svg {
    display: block;
    width: 100%;
  }
  .lazy-image img {
    position: absolute;
    display: block;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .lazy-image__stub svg {
    color: $color-gray-light;
  }
  .lazy-image-enter-active,
  .lazy-image-leave-active {
    transition: opacity 0.5s;
  }
  .lazy-image-enter,
  .lazy-image-leave-to {
    opacity: 0;
  }
  @keyframes load {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes load-reverse {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
</style>
