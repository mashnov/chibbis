<script>
  import { pageNameMapper } from '~/helpers/navigation';

  export default {
    fetch({ redirect }) {
      redirect(301, {
        name: pageNameMapper.mainPage,
      });
    },
  };
</script>
