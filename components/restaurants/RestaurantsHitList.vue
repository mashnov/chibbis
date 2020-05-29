<template>
  <div class="restaurants-hit-list">
    <div class="restaurants-hit-list__title">
      <h2>
        {{ i18n.hitListTitle }}
      </h2>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in hits"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-6"
      >
        <div class="restaurants-hit-list__item">
          <RestaurantsHitListItem
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

  import RestaurantsHitListItem from './RestaurantsHitListItem';

  export default {
    name: 'RestaurantsHitList',
    components: {
      RestaurantsHitListItem,
    },
    computed: {
      ...mapGetters('restaurants', {
        hits: RESTAURANTS.GET_HITS,
      }),
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-hit-list {
    margin: 20px 0;
  }
  .restaurants-hit-list__title {
    display: block;
    margin-bottom: 20px;
  }
  .restaurants-hit-list__title h2 {
    display: inline-block;
    font-weight: 500;
    font-size: 21px;
    line-height: 23px;
    margin: 0 20px;
    color: $color-orange;
    border-bottom: 1px solid $color-orange;
  }
  @media (min-width: $screen-md) {
    .restaurants-hit-list {
      margin: 40px 0;
    }
    .restaurants-hit-list__title {
      margin-bottom: 40px;
      text-align: right;
    }
  }
</style>
