import MODULE from './types';

export default {
  [MODULE.GET_RESTAURANTS]: ({ restaurants }) => (restaurants),
  [MODULE.GET_REVIEWS]: ({ reviews }) => (reviews),
  [MODULE.GET_HITS]: ({ hits }) => (hits),
};
