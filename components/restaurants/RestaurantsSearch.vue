<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="restaurants-search">
          <div class="restaurants-search__field">
            <Input
              :value="filterValue.text"
              :placeholder="i18n.searchPlaceholder"
              @input="setFilterValue({ field: 'text', value: $event })"
            />
          </div>
          <div
            class="restaurants-search__filter-button"
            @click="filterClickHandler"
          >
            <FilterIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { RESTAURANTS, REFERENCES, MODAL } from '~/store/types';

  import FilterIcon from '~/assets/svg/filter-icon.svg';
  import Input from '~/components/form-items/input/Input';
  import RestaurantsFilterModal from './RestaurantsFilterModal';

  export default {
    name: 'RestaurantsPage',
    components: {
      FilterIcon,
      Input,
    },
    computed: {
      ...mapGetters('restaurants', {
        filterValue: RESTAURANTS.GET_FILTER_VALUE,
      }),
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
    methods: {
      ...mapActions('restaurants', {
        setFilterValue: RESTAURANTS.SET_FILTER_VALUE,
      }),
      ...mapActions('modal', {
        showModal: MODAL.SHOW_MODAL,
      }),
      filterClickHandler() {
        this.showModal({
          component: RestaurantsFilterModal,
          position: 'bottom',
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-search {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 10px;
    border: 1px solid $color-orange;
    margin: 10px 0;
  }
  .restaurants-search__field {
    display: block;
    width: calc(100% - 40px);
  }
  .restaurants-search__field ::v-deep input {
    color: $color-white;
  }
  .restaurants-search__filter-button {
    display: block;
    width: 40px;
  }
  .restaurants-search__filter-button svg {
    display: block;
    width: 20px;
    margin: 0 auto;
    color: $color-orange;
  }
  @media (min-width: $screen-md) {
    .restaurants-search {
      margin: 20px 0;
    }
    .restaurants-search__field {
      width: 100%;
    }
    .restaurants-search__filter-button {
      display: none;
    }
  }
</style>
