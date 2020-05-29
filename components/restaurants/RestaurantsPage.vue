<template>
  <div class="restaurants-page">
    <div class="restaurants-page__search">
      <RestaurantsSearch />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="d-none d-md-flex col-md-3">
          <RestaurantsFilters />
        </div>
        <div class="col-12 col-md-9">
          <RestaurantsRestList />
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <RestaurantsHitList />
          <RestaurantsReviewList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RestaurantsSearch from './RestaurantsSearch';
  import RestaurantsFilters from './RestaurantsFilters';
  import RestaurantsRestList from './RestaurantsRestList';
  import RestaurantsHitList from './RestaurantsHitList';
  import RestaurantsReviewList from './RestaurantsReviewList';

  export default {
    name: 'RestaurantsPage',
    components: {
      RestaurantsSearch,
      RestaurantsFilters,
      RestaurantsRestList,
      RestaurantsHitList,
      RestaurantsReviewList,
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-page__search {
    position: sticky;
    top: 0;
    background-color: $background-stop;
    z-index: 2;
  }
</style>
