import throttle from 'lodash/throttle';
import { VIEWPORT } from '~/store/types';
import { sleep } from '~/helpers/system';

export default ({ store }) => {
  sleep(0).then(() => {
    store.dispatch(`viewport/${VIEWPORT.SET_CURRENT_BREAKPOINT}`);
    store.dispatch(`viewport/${VIEWPORT.SET_VIEWPORT_HEIGHT}`);
    store.dispatch(`viewport/${VIEWPORT.SET_VIEWPORT_WIDTH}`);
    store.dispatch(`viewport/${VIEWPORT.SET_SCROLL_TOP}`);

    window.addEventListener('focus', throttle(() => {
      store.dispatch(`viewport/${VIEWPORT.SET_WINDOW_IS_FOCUSED}`);
    }, 100), { passive: true });

    window.addEventListener('resize', throttle(() => {
      store.dispatch(`viewport/${VIEWPORT.SET_VIEWPORT_HEIGHT}`);
      store.dispatch(`viewport/${VIEWPORT.SET_VIEWPORT_WIDTH}`);
      store.dispatch(`viewport/${VIEWPORT.SET_CURRENT_BREAKPOINT}`);
    }, 100), { passive: true });

    window.addEventListener('scroll', throttle(() => {
      store.dispatch(`viewport/${VIEWPORT.SET_SCROLL_TOP}`);
    }, 100), { passive: true });
  });
};
