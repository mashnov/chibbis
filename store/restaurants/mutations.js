import MODULE from './types';

export default {
  [MODULE.MUTATE_RESTAURANTS]: (state, restaurants) => {
    state.restaurants = restaurants;
  },
  [MODULE.MUTATE_REVIEWS]: (state, reviews) => {
    state.reviews = reviews;
  },
  [MODULE.MUTATE_HITS]: (state, hits) => {
    state.hits = hits;
  },
  [MODULE.MUTATE_FILTER_VALUE]: (state, filterValue) => {
    state.filterValue = filterValue;
  },
};
