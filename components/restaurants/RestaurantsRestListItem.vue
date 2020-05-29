<template>
  <div class="restaurants-rest-list-item">
    <div class="restaurants-rest-list-item__logo">
      <LazyImage
        :src="item.logo"
        :alt="item.name"
      />
    </div>
    <div class="restaurants-rest-list-item__meta-wrapper">
      <div class="restaurants-rest-list-item__meta-item">
        <div class="restaurants-rest-list-item__name">
          <span>
            {{ item.name }}
          </span>
        </div>
        <div class="restaurants-rest-list-item__spec">
          <span>
            {{ item.spec.join(', ') }}
          </span>
        </div>
        <div class="restaurants-rest-list-item__review">
          {{ i18n.reviewCount }}: <b>{{ item.reviews.count }}</b>
          <span>
            <LikeIcon />
            {{ item.reviews.positive }}
          </span>
        </div>
      </div>
      <div class="restaurants-rest-list-item__meta-item">
        <div class="restaurants-rest-list-item__cost">
          <span>
            {{ i18n.minCost }}: <b>{{ item.delivery.minCost }}{{ i18n.currency }}</b>
          </span>
        </div>
        <div class="restaurants-rest-list-item__cost">
          <span>
            {{ i18n.deliveryCost }}: <b>{{ item.delivery.cost }}{{ i18n.currency }}</b>
          </span>
        </div>
        <div class="restaurants-rest-list-item__cost">
          <span>
            {{ i18n.deliveryTime }}: <b>{{ item.delivery.time }}{{ i18n.currency }}</b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/store/types';

  import LazyImage from '~/components/form-items/lazy-image/LazyImage';
  import LikeIcon from '~/assets/svg/like-icon.svg';

  export default {
    name: 'RestaurantsRestListItem',
    components: {
      LazyImage,
      LikeIcon,
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
  .restaurants-rest-list-item {
    display: block;
    width: 100%;
    padding: 10px;
    overflow: hidden;
    background-color: $background-stop;
    border-radius: 25px;
    margin-bottom: 40px;
  }
  .restaurants-rest-list-item__logo {
    border-radius: 15px;
    overflow: hidden;
  }
  .restaurants-rest-list-item__meta-item {
    padding: 10px;
  }
  .restaurants-rest-list-item__name {
    display: block;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: $color-gray-light;
  }
  .restaurants-rest-list-item__spec {
    display: none;
  }
  .restaurants-rest-list-item__review {
    display: none;
  }
  .restaurants-rest-list-item__cost {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: $color-gray-middle;
  }
  @media (min-width: $screen-md) {
    .restaurants-rest-list-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .restaurants-rest-list-item__logo {
      width: 160px;
      margin-right: 25px;
    }
    .restaurants-rest-list-item__meta-wrapper {
      display: block;
      width: calc(100% - 160px - 25px);
    }
    .restaurants-rest-list-item__meta-item {
      display: block;
      width: 100%;
    }
  }
  @media (min-width: $screen-lg) {
    .restaurants-rest-list-item__meta-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
    }
    .restaurants-rest-list-item__meta-item {
      width: calc(50% - 25px);
    }
    .restaurants-rest-list-item__meta-item:first-child {
      margin-right: 50px;
    }
    .restaurants-rest-list-item__name {
      margin-bottom: 10px;
    }
    .restaurants-rest-list-item__spec {
      display: block;
      font-weight: 400;
      font-size: 13px;
      line-height: 25px;
      color: $color-gray-middle;
    }
    .restaurants-rest-list-item__review {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-weight: 400;
      font-size: 13px;
      line-height: 25px;
      color: $color-gray-middle;
    }
    .restaurants-rest-list-item__review span {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-left: 40px;
    }
    .restaurants-rest-list-item__review span svg {
      display: block;
      width: 15px;
      color: $color-orange;
      margin-right: 5px;
    }
  }
</style>
