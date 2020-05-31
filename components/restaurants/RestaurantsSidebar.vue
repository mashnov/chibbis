<template>
  <div class="restaurants-sidebar">
    <div class="restaurants-sidebar__wrap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
    name: 'RestaurantsSidebar',
  };
</script>

<style lang="scss" scoped>
  .restaurants-sidebar {
    display: none;
  }
  @media (min-width: $screen-md) {
    .restaurants-sidebar {
      position: relative;
      display: block;
      width: 100%;
    }
    .restaurants-sidebar__wrap {
      position: sticky;
      display: block;
      width: 100%;
      top: 105px;
      margin-top: 105px;
      margin-bottom: 25px;
    }
  }
</style>
