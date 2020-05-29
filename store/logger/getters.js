import MODULE from './types';

export default {
  [MODULE.GET_DEVICE_TYPES]: ({ deviceTypes }) => deviceTypes,
  [MODULE.GET_BROWSER_NAME]: ({ browserName }) => browserName,
  [MODULE.GET_IS_AD_BLOCK]: ({ isAdBlock }) => isAdBlock,
};
