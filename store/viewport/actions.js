import cloneDeep from 'lodash/cloneDeep';
import MODULE from './types';

import {
  getCurrentBreakpoint,
  getScrollTop,
  getScrollDir,
  getWindowIsFocused,
  getViewportHeight,
  getViewportWidth,
} from '~/helpers/viewport';

export default {
  [MODULE.SET_CURRENT_BREAKPOINT]({ commit }) {
    const currentBreakpoint = getCurrentBreakpoint();
    commit(MODULE.MUTATE_CURRENT_BREAKPOINT, currentBreakpoint);
  },
  [MODULE.SET_SCROLL_TOP]({ commit, state }) {
    const currentValue = state.scrollTop;
    const scrollValue = getScrollTop();
    const scrollDir = getScrollDir({ scrollValue, currentValue });
    commit(MODULE.MUTATE_SCROLL_TOP, scrollValue);
    commit(MODULE.MUTATE_SCROLL_DIR, scrollDir);
  },
  [MODULE.SET_WINDOW_IS_FOCUSED]({ commit }) {
    const isFocused = getWindowIsFocused();
    commit(MODULE.MUTATE_WINDOW_IS_FOCUSED, isFocused);
  },
  [MODULE.SET_VIEWPORT_HEIGHT]({ commit }) {
    const viewportHeight = getViewportHeight();
    commit(MODULE.MUTATE_VIEWPORT_HEIGHT, viewportHeight);
  },
  [MODULE.SET_VIEWPORT_WIDTH]({ commit }) {
    const viewportWidth = getViewportWidth();
    commit(MODULE.MUTATE_VIEWPORT_WIDTH, viewportWidth);
  },
  [MODULE.SET_LOCKER]({ commit }, lockers) {
    commit(MODULE.MUTATE_LOCKER, lockers);
  },
  [MODULE.ADD_LOCKER]({ dispatch, state }, id) {
    const lockers = cloneDeep(state.lockers);
    lockers.push(id);
    dispatch(MODULE.SET_LOCKER, lockers);
  },
  [MODULE.REMOVE_LOCKER]({ dispatch, state }, id) {
    const lockers = cloneDeep(state.lockers);
    const index = lockers.indexOf(id);
    lockers.splice(index, 1);
    dispatch(MODULE.SET_LOCKER, lockers);
  },
};
