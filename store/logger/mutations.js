import MODULE from './types';

export default {
  [MODULE.MUTATE_DEVICE_TYPES]: (state, deviceTypes) => {
    state.deviceTypes = deviceTypes;
  },
  [MODULE.MUTATE_BROWSER_NAME]: (state, browserName) => {
    state.browserName = browserName;
  },
  [MODULE.MUTATE_IS_AD_BLOCK]: (state, isAdBlock) => {
    state.isAdBlock = isAdBlock;
  },
};
