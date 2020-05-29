import MODULE from './types';
import { restaurants } from '~/store/request-url';
import { restaurantsList, reviewList, hitsList } from '~/helpers/transformers';

export default {
  [MODULE.FETCH_RESTAURANTS]() {
    return this.$axios.$get(restaurants.restaurants).then((response) => {
      return restaurantsList(response);
    });
  },
  [MODULE.FETCH_REVIEWS]() {
    return this.$axios.$get(restaurants.reviews).then((response) => {
      return reviewList(response);
    });
  },
  [MODULE.FETCH_HITS]() {
    return this.$axios.$get(restaurants.hits).then((response) => {
      return hitsList(response);
    });
  },
};
