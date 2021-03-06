import MODULE from './types';

export default {
  [MODULE.GET_RESTAURANTS]: ({ restaurants }) => (restaurants),
  [MODULE.GET_REVIEWS]: ({ reviews }) => (reviews),
  [MODULE.GET_HITS]: ({ hits }) => (hits),
  [MODULE.GET_FILTER_VALUE]: ({ filterValue }) => (filterValue),
  [MODULE.GET_SPEC_OPTIONS]: ({ specOptions }) => (specOptions),
};
