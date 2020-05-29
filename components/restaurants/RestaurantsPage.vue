<template>
  <div class="restaurants-page" />
</template>

<script>
  import { mapGetters } from 'vuex';
  import { RESTAURANTS } from '~/store/types';

  export default {
    name: 'RestaurantsPage',
    computed: {
      ...mapGetters('restaurants', {
        restaurants: RESTAURANTS.GET_RESTAURANTS,
        reviews: RESTAURANTS.GET_REVIEWS,
        hits: RESTAURANTS.GET_HITS,
      }),
    },
  };
</script>
