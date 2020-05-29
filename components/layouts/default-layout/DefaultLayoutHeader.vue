<template>
  <div class="default-layout-header">
    <nuxt-link
      :to="logoLink"
    >
      <logoIcon />
    </nuxt-link>
  </div>
</template>

<script>
  import { pageNameMapper } from '~/helpers/navigation';
  import logoIcon from '~/assets/svg/logo.svg';

  export default {
    name: 'DefaultLayoutHeader',
    components: {
      logoIcon,
    },
    computed: {
      logoLink() {
        const name = pageNameMapper.mainPage;
        return { name };
      },
    },
  };
</script>

<style lang="scss">
  .default-layout-header {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    background-color: $color-white;
    opacity: 0.98;
  }
  .default-layout-header a {
    color: $color-black;
    text-decoration: none;
  }
  .default-layout-header svg {
    display: block;
    height: 40px;
    color: $color-black;
  }
  @media (min-width: $screen-sm) {
    .default-layout-header svg {
      height: 50px;
    }
  }
  @media (min-width: $screen-md) {
    .default-layout-header svg {
      height: 60px;
    }
  }
  @media (min-width: $screen-xl) {
    .default-layout-header {
      padding: 20px;
    }
  }
</style>
