import { shallowMount } from '@vue/test-utils';
import TestedComponent from './Checkbox';

const mock = {
  componentClassName: '.checkbox',
};

describe('checkbox', () => {
  it('Should render', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        value: false,
      },
    });
    expect(wrapper.find(mock.componentClassName).exists()).toBe(true);
  });
  it('Should emit !value', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        value: false,
      },
    });
    wrapper.find(mock.componentClassName).trigger('click');
    expect(wrapper.emitted('input')[0]).toEqual([true]);
  });
});
