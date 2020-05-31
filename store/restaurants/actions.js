import cloneDeep from 'lodash/cloneDeep';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import set from 'lodash/set';

import MODULE from './types';
import { PRELOADER } from '~/store/types';
import Api from './api';

const showPreloaderActionName = `preloader/${PRELOADER.SHOW_PRELOADER}`;
const hidePreloaderActionName = `preloader/${PRELOADER.HIDE_PRELOADER}`;
const preloaderId = 'restaurants';

export default {
  async [MODULE.FETCH_DATA]({ dispatch }) {
    await dispatch(MODULE.FETCH_RESTAURANTS);
    await dispatch(MODULE.FETCH_REVIEWS);
    await dispatch(MODULE.FETCH_HITS);
  },
  async [MODULE.FETCH_RESTAURANTS]({ dispatch, commit }) {
    dispatch(showPreloaderActionName, preloaderId, { root: true });
    const restaurants = await Api[MODULE.FETCH_RESTAURANTS].call(this);
    commit(MODULE.MUTATE_RESTAURANTS, restaurants);
    dispatch(MODULE.SET_SPEC_OPTIONS, restaurants);
    dispatch(hidePreloaderActionName, preloaderId, { root: true });
  },
  async [MODULE.FETCH_REVIEWS]({ dispatch, commit }) {
    dispatch(showPreloaderActionName, preloaderId, { root: true });
    const review = await Api[MODULE.FETCH_REVIEWS].call(this);
    commit(MODULE.MUTATE_REVIEWS, review);
    dispatch(hidePreloaderActionName, preloaderId, { root: true });
  },
  async [MODULE.FETCH_HITS]({ dispatch, commit }) {
    dispatch(showPreloaderActionName, preloaderId, { root: true });
    const hits = await Api[MODULE.FETCH_HITS].call(this);
    commit(MODULE.MUTATE_HITS, hits);
    dispatch(hidePreloaderActionName, preloaderId, { root: true });
  },
  [MODULE.SET_FILTER_VALUE]({ commit, state }, { field, value }) {
    const filterValue = cloneDeep(state.filterValue);
    const updatedValue = set(filterValue, field, value);
    commit(MODULE.MUTATE_FILTER_VALUE, updatedValue);
  },
  [MODULE.SET_SPEC_OPTIONS]({ commit }, restaurants) {
    const specs = restaurants.map((item) => (item.spec));
    const specList = flatten(specs);
    const specUniq = uniq(specList);
    commit(MODULE.MUTATE_SPEC_OPTIONS, specUniq);
  },
};
