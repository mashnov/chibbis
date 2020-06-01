import { shallowMount } from '@vue/test-utils';
import TestedComponent from './Button';

const mock = {
  componentClassName: '.button',
};

describe('button', () => {
  it('Should render', () => {
    const wrapper = shallowMount(TestedComponent);
    expect(wrapper.find(mock.componentClassName).exists()).toBe(true);
  });
  it('Should emit click event', () => {
    const wrapper = shallowMount(TestedComponent);
    wrapper.find(mock.componentClassName).trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
