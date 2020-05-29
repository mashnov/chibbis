import MODULE from './types';
import translates from './translates';

export default {
  moduleName: 'references',
  namespaced: true,
  actions: {},
  mutations: {},
  state: () => ({ i18n: translates }),
  getters: {
    [MODULE.GET_I18N]: ({ i18n }) => (i18n),
  },
};
