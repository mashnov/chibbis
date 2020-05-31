import { shallowMount } from '@vue/test-utils';
import TestedComponent from './Input';

const mock = {
  componentClassName: '.input',
};

describe('Input', () => {
  it('Should render', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        value: '',
      },
    });
    expect(wrapper.find(mock.componentClassName).exists()).toBe(true);
  });
  it('Should emit text instead input event', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        value: '',
      },
    });
    wrapper.find('input').element.value = mock.componentClassName;
    wrapper.find('input').trigger('input');
    expect(wrapper.emitted('input')[0]).toEqual([mock.componentClassName]);
  });
});
