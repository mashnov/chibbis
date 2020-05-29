import { LOGGER } from '~/store/types';
import { sleep } from '~/helpers/system';

export default ({ store }) => {
  sleep(0).then(() => {
    store.dispatch(`logger/${LOGGER.SET_IS_AD_BLOCK}`);
  });
};
