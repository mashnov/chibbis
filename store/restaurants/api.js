import MODULE from './types';
import { restaurants } from '~/store/request-url';
import { restaurantsList, reviewList, hitsList } from '~/helpers/transformers';

export default {
  [MODULE.FETCH_RESTAURANTS]() {
    return this.$axios.$get(restaurants.restaurants)
      .then((response) => {
        return restaurantsList(response);
      })
      .catch(() => {
        return [];
      });
  },
  [MODULE.FETCH_REVIEWS]() {
    return this.$axios.$get(restaurants.reviews)
      .then((response) => {
        return reviewList(response);
      })
      .catch(() => {
        return [];
      });
  },
  [MODULE.FETCH_HITS]() {
    return this.$axios.$get(restaurants.hits)
      .then((response) => {
        return hitsList(response);
      })
      .catch(() => {
        return [];
      });
  },
};
