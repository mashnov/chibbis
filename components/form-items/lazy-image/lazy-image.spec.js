import { shallowMount } from '@vue/test-utils';
import TestedComponent from './LazyImage';

const mock = {
  componentClassName: '.lazy-image',
  imageSuccessUrl: 'https://img.day.az/2016/08/01/806540.jpg',
  imageErrorUrl: 'https://img.day.az/2016/08/01/806541.jpg',
  imageAlt: 'cat image',
};

describe('lazy-image', () => {
  it('Should render', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        src: mock.imageSuccessUrl,
        alt: mock.imageAlt,
      },
    });
    expect(wrapper.find(mock.componentClassName).exists()).toBe(true);
  });

  it('Should render with loader overlay', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        src: mock.imageSuccessUrl,
        alt: mock.imageAlt,
      },
    });
    expect(wrapper.vm.loaderIsVisible).toEqual(true);
  });

  it('Should hide overlay & show image on success load', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        src: mock.imageSuccessUrl,
        alt: mock.imageAlt,
      },
    });
    wrapper.vm.imageLoadHandler();
    expect(wrapper.vm.loaderIsVisible).toEqual(false);
    expect(wrapper.vm.imageIsVisible).toEqual(true);
    expect(wrapper.vm.stubIsVisible).toEqual(false);
  });

  it('Should hide overlay & show stub on error load', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        src: mock.imageErrorUrl,
        alt: mock.imageAlt,
      },
    });
    wrapper.vm.imageErrorHandler();
    expect(wrapper.vm.loaderIsVisible).toEqual(false);
    expect(wrapper.vm.imageIsVisible).toEqual(false);
    expect(wrapper.vm.stubIsVisible).toEqual(true);
  });

  it('Should show overlay when scr is change', () => {
    const wrapper = shallowMount(TestedComponent, {
      propsData: {
        src: mock.imageSuccessUrl,
        alt: mock.imageAlt,
      },
    });
    wrapper.setProps({
      src: mock.imageErrorUrl,
    });
    expect(wrapper.vm.loaderIsVisible).toEqual(true);
    expect(wrapper.vm.imageIsVisible).toEqual(false);
    expect(wrapper.vm.stubIsVisible).toEqual(false);
  });
});
