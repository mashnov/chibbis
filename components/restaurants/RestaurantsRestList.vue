<template>
  <div class="restaurants-rest-list">
    <div class="restaurants-rest-list__title">
      <h2>
        {{ i18n.restaurantListTitle }}
      </h2>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in restaurants"
        :key="index"
        class="col-12 col-sm-6 col-md-12"
      >
        <div class="restaurants-rest-list__item">
          <RestaurantsRestListItem
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES, RESTAURANTS } from '~/store/types';

  import RestaurantsRestListItem from './RestaurantsRestListItem';

  export default {
    name: 'RestaurantsRestList',
    components: {
      RestaurantsRestListItem,
    },
    computed: {
      ...mapGetters('restaurants', {
        restaurants: RESTAURANTS.GET_RESTAURANTS,
      }),
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-rest-list {
    margin: 20px 0;
  }
  .restaurants-rest-list__title {
    display: block;
    margin-bottom: 20px;
  }
  .restaurants-rest-list__title h2 {
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 21px;
    line-height: 23px;
    margin: 0 20px;
    color: $color-orange;
  }
  @media (min-width: $screen-md) {
    .restaurants-rest-list {
      margin: 40px 0;
    }
    .restaurants-rest-list__title {
      margin-bottom: 40px;
      text-align: right;
    }
  }
</style>
