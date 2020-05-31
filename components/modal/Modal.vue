<template>
  <transition
    appear
    name="fade"
  >
    <div
      v-if="isVisible"
      class="modal"
      :class="[
        isDefaultPosition && 'modal_padded',
        isBottom && 'modal_bottom',
      ]"
      @click="closeModal"
    >
      <div
        :class="[
          isDefaultPosition && 'container',
          !isDefaultPosition && 'container-fluid',
        ]"
      >
        <div
          class="row"
          :class="[
            isDefaultPosition && 'justify-content-center',
            isBottom && 'justify-content-center',
            isRight && 'justify-content-end',
          ]"
        >
          <transition
            :name="modalAnimationName"
          >
            <Component
              :is="modalComponent"
              v-show="componentIsVisible"
              class="modal__container"
              :class="[
                isBottom && 'modal__container_bottom',
                isRight && 'modal__container_right'
              ]"
              @click.native.stop
            />
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import isNull from 'lodash/isNull';
  import { mapActions, mapGetters } from 'vuex';
  import { sleep } from '~/helpers/system';
  import { MODAL } from '~/store/types';

  export default {
    name: 'Modal',
    data() {
      return {
        componentIsVisible: false,
      };
    },
    computed: {
      ...mapGetters('modal', {
        modalPosition: MODAL.GET_POSITION,
        modalComponent: MODAL.GET_COMPONENT,
      }),
      isVisible() {
        const { modalComponent } = this;
        return !isNull(modalComponent);
      },
      isBottom() {
        return this.modalPosition === 'bottom';
      },
      isRight() {
        return this.modalPosition === 'right';
      },
      isDefaultPosition() {
        const { modalPosition } = this;
        return isNull(modalPosition);
      },
      modalAnimationName() {
        const { isDefaultPosition, isBottom, isRight } = this;
        return (isDefaultPosition && 'modal-default') || (isRight && 'modal-right') || (isBottom && 'modal-bottom');
      },
    },
    watch: {
      modalComponent() {
        this.setVisibility();
      },
    },
    methods: {
      ...mapActions('modal', {
        hideModal: MODAL.HIDE_MODAL,
      }),
      setVisibility() {
        const { modalComponent } = this;
        if (isNull(modalComponent)) {
          this.closeModal();
        }
        else {
          this.showModal();
        }
      },
      async showModal() {
        await sleep(200);
        this.componentIsVisible = true;
      },
      async closeModal() {
        this.componentIsVisible = false;
        await sleep(200);
        this.hideModal();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: $color-overlay;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    z-index: 2;
    overflow: hidden;
    transition: opacity 0.2s ease;
  }
  .modal_bottom {
    align-items: flex-end;
  }
  .modal_padded {
    padding: 12px 0;
  }
  .modal__container {
    background: $background-stop;
    padding-top: 48px;
    padding-bottom: 48px;
    border-radius: 24px;
  }
  .modal__container_bottom {
    border-radius: 24px 24px 0 0;
  }
  .modal__container_right {
    border-radius: 0;
  }
</style>
