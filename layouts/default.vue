<template>
  <div class="default-layout">
    <div id="adBanner" />
    <Modal />
    <Preloader />
    <DefaultLayout />
  </div>
</template>

<script>
  import Modal from '~/components/modal/Modal';
  import Preloader from '~/components/preloader/Preloader';
  import DefaultLayout from '~/components/layouts/default-layout/DefaultLayout';

  export default {
    name: 'Default',
    components: {
      Modal,
      Preloader,
      DefaultLayout,
    },
  };
</script>
