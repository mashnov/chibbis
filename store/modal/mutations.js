import MODULE from './types';

export default {
  [MODULE.MUTATE_COMPONENT]: (state, component) => {
    state.component = component;
  },
  [MODULE.MUTATE_POSITION]: (state, position) => {
    state.position = position;
  },
};
