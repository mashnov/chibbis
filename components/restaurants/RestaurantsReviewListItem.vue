<template>
  <div
    class="restaurants-review-list-item"
    :class="[
      item.isPositive && 'restaurants-review-list-item_positive'
    ]"
  >
    <div class="restaurants-review-list-item__title">
      <Component :is="iconName" />
      {{ item.userName }}
      {{ i18n.reviewAboutRestaurants }}
      {{ item.restaurantName }}
    </div>
    <div class="restaurants-review-list-item__comment">
      {{ item.comment.text }}
    </div>
    <div class="restaurants-review-list-item__date">
      <span>
        {{ item.comment.ago }}
      </span>
      <span>
        {{ item.comment.date }}
      </span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/store/types';

  import LikeIcon from '~/assets/svg/like-icon.svg';
  import DislikeIcon from '~/assets/svg/dislike-icon.svg';

  const ICON_MAPPER = {
    positive: 'LikeIcon',
    negative: 'DislikeIcon',
  };

  export default {
    name: 'RestaurantsReviewListItem',
    components: {
      LikeIcon,
      DislikeIcon,
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
      iconName() {
        const { item } = this;
        const reaction = item.isPositive ? 'positive' : 'negative';
        return ICON_MAPPER[reaction];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-review-list-item {
    display: block;
    width: 100%;
    padding: 20px;
    overflow: hidden;
    background-color: $background-stop;
    border-radius: 25px;
    margin-bottom: 40px;
  }
  .restaurants-review-list-item__title {
    display: block;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: $color-gray-light;
  }
  .restaurants-review-list-item__title svg {
    width: 20px;
    color: $color-red;
  }
  .restaurants-review-list-item_positive .restaurants-review-list-item__title svg {
    color: $color-green;
  }
  .restaurants-review-list-item__comment {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: $color-gray-middle;
    margin-top: 20px;
    margin-bottom: 20px;
    word-break: break-all;
  }
  .restaurants-review-list-item__date {
    display: inline-block;
    background: $background-start;
    padding: 0 25px;
    border-radius: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .restaurants-review-list-item__date span {
    display: inline-block;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: $color-gray-middle;
  }
  .restaurants-review-list-item__date span:last-child {
    display: none;
  }
  .restaurants-review-list-item__date:hover span:first-child {
    display: none;
  }
  .restaurants-review-list-item__date:hover span:last-child {
    display: inline-block;
  }
</style>
