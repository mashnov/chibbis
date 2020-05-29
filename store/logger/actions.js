import { getAdBlockDetectedValue } from '~/helpers/logger';
import MODULE from './types';

export default {
  async [MODULE.SET_DEVICE_TYPES]({ commit }, deviceTypes) {
    await commit(MODULE.MUTATE_DEVICE_TYPES, deviceTypes);
  },

  [MODULE.SET_BROWSER_NAME]({ commit }, browserName) {
    commit(MODULE.MUTATE_BROWSER_NAME, browserName);
  },
  [MODULE.SET_IS_AD_BLOCK]({ commit }) {
    const isBlocked = getAdBlockDetectedValue();
    commit(MODULE.MUTATE_IS_AD_BLOCK, isBlocked);
  },
};
