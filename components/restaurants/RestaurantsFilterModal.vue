<template>
  <div class="col-12 col-sm-10 restaurants-filter-modal">
    <div class="restaurants-filter-modal__search">
      <Input
        :value="searchValue"
        :placeholder="i18n.searchPlaceholder"
        @input="setSearchValue"
      />
    </div>
    <div class="restaurants-filter-modal__filter">
      <div
        v-for="spec in specOptions"
        :key="spec"
        class="restaurants-filter-modal__filter-item"
      >
        <Checkbox
          :value="getOptionValue(spec)"
          @input="changeSpecValue($event, spec)"
        >
          {{ spec }}
        </Checkbox>
      </div>
    </div>
    <div class="restaurants-filter-modal__buttons">
      <div class="restaurants-filter-modal__buttons-item">
        <Button @click="cancelHandler">
          {{ i18n.filterModalCancel }}
        </Button>
      </div>
      <div class="restaurants-filter-modal__buttons-item">
        <Button @click="applyHandler">
          {{ i18n.filterModalApply }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
  import cloneDeep from 'lodash/cloneDeep';
  import { mapGetters, mapActions } from 'vuex';
  import { RESTAURANTS, REFERENCES, MODAL } from '~/store/types';

  import Input from '~/components/form-items/input/Input';
  import Checkbox from '~/components/form-items/checkbox/Checkbox';
  import Button from '~/components/form-items/button/Button';

  export default {
    name: 'RestaurantsFilterModal',
    components: {
      Input,
      Checkbox,
      Button,
    },
    data() {
      return {
        searchValue: '',
        filterValue: [],
      };
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      ...mapGetters('restaurants', {
        filterStateValue: RESTAURANTS.GET_FILTER_VALUE,
        specOptions: RESTAURANTS.GET_SPEC_OPTIONS,
      }),
    },
    watch: {
      filterStateValue: {
        immediate: true,
        handler() {
          this.setFilterDefaultValue();
        },
      },
    },
    methods: {
      ...mapActions('restaurants', {
        setFilterValue: RESTAURANTS.SET_FILTER_VALUE,
      }),
      ...mapActions('modal', {
        closeModal: MODAL.HIDE_MODAL,
      }),
      setFilterDefaultValue() {
        const filterStateValue = cloneDeep(this.filterStateValue);
        this.searchValue = filterStateValue.text;
        this.filterValue = filterStateValue.spec;
      },
      changeSpecValue(value, spec) {
        const { filterValue } = this;
        if (value) {
          filterValue.push(spec);
        }
        else {
          filterValue.splice(filterValue.indexOf(spec), 1);
        }
      },
      setSearchValue(value) {
        this.searchValue = value;
      },
      getOptionValue(spec) {
        const { filterValue } = this;
        return filterValue.includes(spec);
      },
      cancelHandler() {
        this.setFilterDefaultValue();
        this.closeModal();
      },
      applyHandler() {
        const { searchValue, filterValue } = this;
        this.setFilterValue({ field: 'text', value: searchValue });
        this.setFilterValue({ field: 'spec', value: filterValue });
        this.closeModal();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .restaurants-filter-modal {
    margin-top: 120px;
  }
  .restaurants-filter-modal__search {
    border-radius: 50px;
    background-color: $background-start;
    padding: 0 20px;
    overflow: hidden;
  }
  .restaurants-filter-modal__search ::v-deep input {
    color: $color-gray-light;
  }
  .restaurants-filter-modal__filter {
    margin-top: 60px;
  }
  .restaurants-filter-modal__filter-item {
    margin-bottom: 15px;
  }
  .restaurants-filter-modal__buttons {
    margin-top: 80px;
  }
  .restaurants-filter-modal__buttons-item {
    margin-bottom: 10px;
  }
  @media (min-width: $screen-sm) {
    .restaurants-filter-modal__buttons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .restaurants-filter-modal__buttons-item {
      display: block;
      width: calc(50% - 10px);
    }
    .restaurants-filter-modal__buttons-item:first-child {
      margin-right: 20px;
    }
  }
</style>
