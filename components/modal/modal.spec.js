import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import modalVuexModule from '~/store/modal';
import { MODAL } from '~/store/types';
import Modal from './Modal';
import Preloader from '~/components/preloader/Preloader';

const mock = {
  componentClassName: '.modal',
  contentClassName: '.modal__container',
};

const localVue = createLocalVue();
localVue.use(Vuex);

describe('modal', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        [modalVuexModule.moduleName]: cloneDeep(modalVuexModule),
      },
    });
  });

  it('Should not render without component', () => {
    const wrapper = shallowMount(Modal, { store, localVue });
    store.dispatch(`${modalVuexModule.moduleName}/${MODAL.SHOW_MODAL}`, {});
    expect(wrapper.find(mock.componentClassName).exists()).toBe(false);
  });

  it('Should render', (done) => {
    const wrapper = shallowMount(Modal, { store, localVue });
    store.dispatch(`${modalVuexModule.moduleName}/${MODAL.SHOW_MODAL}`, { component: Preloader });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find(mock.componentClassName).exists()).toBe(true);
      done();
    });
  });

  it('Should have bottom-modal animation', () => {
    const wrapper = shallowMount(Modal, { store, localVue });
    store.dispatch(`${modalVuexModule.moduleName}/${MODAL.SHOW_MODAL}`, { component: Preloader, position: 'bottom' });
    expect(wrapper.vm.modalAnimationName).toEqual('modal-bottom');
  });

  it('Should have right-modal animation', () => {
    const wrapper = shallowMount(Modal, { store, localVue });
    store.dispatch(`${modalVuexModule.moduleName}/${MODAL.SHOW_MODAL}`, { component: Preloader, position: 'right' });
    expect(wrapper.vm.modalAnimationName).toEqual('modal-right');
  });

  it('Should wait 200ms before show content', (done) => {
    const wrapper = shallowMount(Modal, { store, localVue });
    store.dispatch(`${modalVuexModule.moduleName}/${MODAL.SHOW_MODAL}`, { component: Preloader });
    expect(wrapper.find(mock.contentClassName).exists()).toBe(false);
    setTimeout(() => {
      expect(wrapper.find(mock.contentClassName).exists()).toBe(true);
      done();
    }, 200);
  });
});
