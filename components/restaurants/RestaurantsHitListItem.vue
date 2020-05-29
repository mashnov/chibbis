<template>
  <div class="restaurants-hit-list-item">
    <div class="restaurants-hit-list-item__image">
      <div class="restaurants-hit-list-item__price">
        {{ item.price }} {{ i18n.currency }}
      </div>
      <LazyImage
        :src="item.image"
        :alt="item.title"
      />
    </div>
    <div class="restaurants-hit-list-item__wrap">
      <div class="restaurants-hit-list-item__title">
        {{ item.title }}
      </div>
      <div class="restaurants-hit-list-item__description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/store/types';

  import LazyImage from '~/components/form-items/lazy-image/LazyImage';

  export default {
    name: 'RestaurantsHitListItem',
    components: {
      LazyImage,
    },
    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-hit-list-item {
    display: block;
    width: 100%;
    padding: 10px;
    overflow: hidden;
    background-color: $background-stop;
    border-radius: 25px;
    margin-bottom: 40px;
  }
  .restaurants-hit-list-item__image {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
  }
  .restaurants-hit-list-item__price {
    position: absolute;
    display: inline-block;
    top: 120px;
    right: -20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
    min-width: 230px;
    text-align: center;
    background-color: $color-orange;
    transform: rotate(45deg);
    transform-origin: right;
    opacity: 0.96;
    z-index: 1;
  }
  .restaurants-hit-list-item__title {
    display: block;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: $color-gray-light;
    margin-top: 10px;
  }
  .restaurants-hit-list-item__description {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: $color-gray-middle;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
  }
  @media (min-width: $screen-xl) {
    .restaurants-hit-list-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .restaurants-hit-list-item__image {
      width: 180px;
      margin-right: 25px;
    }
    .restaurants-hit-list-item__price {
      top: 100px;
      right: -40px;
    }
    .restaurants-hit-list-item__wrap {
      display: block;
      width: calc(100% - 180px - 25px);
    }
  }
</style>
