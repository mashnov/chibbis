<template>
  <div
    class="default-layout"
    :class="layoutIsLocked && 'default-layout_locked'"
    :style="layoutStyle"
  >
    <div class="default-layout__header">
      <DefaultLayoutHeader />
    </div>
    <div class="default-layout__content">
      <slot>
        <nuxt />
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { VIEWPORT } from '~/store/types';
import { setScrollTop } from '~/helpers/viewport';

import DefaultLayoutHeader from './DefaultLayoutHeader';

export default {
  name: 'DefaultLayout',
  components: {
    DefaultLayoutHeader,
  },
  data() {
    return {
      pageScrollPosition: 0,
    };
  },
  computed: {
    ...mapGetters('viewport', {
      scrollTop: VIEWPORT.GET_SCROLL_TOP,
      layoutIsLocked: VIEWPORT.GET_PAGE_IS_LOCKED,
    }),
    layoutStyle() {
      const { layoutIsLocked, pageScrollPosition } = this;
      const top = `${pageScrollPosition / -1}px`;
      const minHeight = `calc(100vh + ${pageScrollPosition}px)`;
      return layoutIsLocked ? { top, minHeight } : {};
    },
  },
  watch: {
    layoutIsLocked() {
      this.setPageScroll();
    },
  },
  methods: {
    setPageScroll() {
      const { pageScrollPosition, layoutIsLocked, scrollTop } = this;
      const scrollPosition = layoutIsLocked ? 0 : pageScrollPosition;
      if (layoutIsLocked) {
        this.pageScrollPosition = scrollTop;
      }
      this.$nextTick(() => {
        setScrollTop(scrollPosition);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .default-layout {
    display: block;
    width: 100%;
    z-index: 0;
  }
  .default-layout_locked {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    min-height: 100vh;
    overflow: hidden;
    pointer-events: none;
  }
  .default-layout__header {
    position: relative;
    width: 100%;
  }
  .default-layout__content {
    display: block;
    width: 100%;
  }
</style>
