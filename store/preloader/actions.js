import cloneDeep from 'lodash/cloneDeep';
import MODULE from './types';

export default {
  [MODULE.SET_PRELOADER_LIST]({ commit }, list) {
    commit(MODULE.MUTATE_PRELOADER_LIST, list);
  },
  [MODULE.SHOW_PRELOADER]({ dispatch, state }, id) {
    const list = cloneDeep(state.list);
    list.push(id);
    dispatch(MODULE.SET_PRELOADER_LIST, list);
  },
  [MODULE.HIDE_PRELOADER]({ dispatch, state }, id) {
    const list = cloneDeep(state.list);
    const index = list.indexOf(id);
    list.splice(index, 1);
    dispatch(MODULE.SET_PRELOADER_LIST, list);
  },
};
