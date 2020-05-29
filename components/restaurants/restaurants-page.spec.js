import { shallowMount } from '@vue/test-utils';
import TestedComponent from './RestaurantsPage';

describe('RestaurantsPage.vue', () => {
  it('Should render', () => {
    const wrapper = shallowMount(TestedComponent);

    expect(
      wrapper.find('.restaurants-page').exists(),
    ).toBe(true);
  });
});
