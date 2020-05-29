<template>
  <RestaurantsPage />
</template>

<script>
  import { RESTAURANTS } from '~/store/types';
  import RestaurantsPage from '~/components/restaurants/RestaurantsPage';

  export default {
    name: 'Restaurants',
    components: {
      RestaurantsPage,
    },
    async asyncData({ store: { dispatch } }) {
      await dispatch(`restaurants/${RESTAURANTS.FETCH_DATA}`);
    },
  };
</script>
