import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import preloaderVuexModule from '~/store/preloader';
import { PRELOADER } from '~/store/types';
import Preloader from './Preloader';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Preloader.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        [preloaderVuexModule.moduleName]: cloneDeep(preloaderVuexModule),
      },
    });
  });

  it('Hidden by default', () => {
    const wrapper = shallowMount(Preloader, { store, localVue });
    expect(wrapper.find('.preloader').exists()).toBe(false);
  });

  it('Should render', (done) => {
    const wrapper = shallowMount(Preloader, { store, localVue });
    store.dispatch(`${preloaderVuexModule.moduleName}/${PRELOADER.SHOW_PRELOADER}`, 'test_id');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.preloader').exists()).toBe(true);
      done();
    });
  });
});
