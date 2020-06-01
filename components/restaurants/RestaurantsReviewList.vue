<template>
  <div
    v-if="reviews.length"
    class="restaurants-review-list"
  >
    <div class="restaurants-review-list__title">
      <h2>
        {{ i18n.reviewListTitle }}
      </h2>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in reviews"
        :key="index"
        class="col-12"
      >
        <div class="restaurants-review-list__item">
          <RestaurantsReviewListItem
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

  import RestaurantsReviewListItem from './RestaurantsReviewListItem';

  export default {
    name: 'RestaurantsReviewList',
    components: {
      RestaurantsReviewListItem,
    },
    computed: {
      ...mapGetters('restaurants', {
        reviews: RESTAURANTS.GET_REVIEWS,
      }),
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-review-list {
    margin: 20px 0;
  }
  .restaurants-review-list__title {
    display: block;
    margin-bottom: 20px;
  }
  .restaurants-review-list__title h2 {
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 21px;
    line-height: 23px;
    margin: 0 20px;
    color: $color-orange;
  }
  @media (min-width: $screen-md) {
    .restaurants-review-list {
      margin: 40px 0;
    }
    .restaurants-review-list__title {
      margin-bottom: 40px;
      text-align: right;
    }
  }
</style>
