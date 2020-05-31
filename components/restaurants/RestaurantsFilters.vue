<template>
  <div class="restaurants-filters">
    <div
      v-for="spec in specOptions"
      :key="spec"
      class="restaurants-filters__item"
    >
      <Checkbox
        :value="getOptionValue(spec)"
        @input="changeSpecValue($event, spec)"
      >
        {{ spec }}
      </Checkbox>
    </div>
  </div>
</template>

<script>
  import cloneDeep from 'lodash/cloneDeep';
  import { mapGetters, mapActions } from 'vuex';
  import { RESTAURANTS } from '~/store/types';

  import Checkbox from '~/components/form-items/checkbox/Checkbox';

  export default {
    name: 'RestaurantsFilters',
    components: {
      Checkbox,
    },
    computed: {
      ...mapGetters('restaurants', {
        filterValue: RESTAURANTS.GET_FILTER_VALUE,
        specOptions: RESTAURANTS.GET_SPEC_OPTIONS,
      }),
    },
    methods: {
      ...mapActions('restaurants', {
        setFilterValue: RESTAURANTS.SET_FILTER_VALUE,
      }),
      changeSpecValue(value, spec) {
        const specValue = cloneDeep(this.filterValue.spec);
        if (value) {
          specValue.push(spec);
        }
        else {
          specValue.splice(specValue.indexOf(spec), 1);
        }
        this.setFilterValue({ field: 'spec', value: specValue });
      },
      getOptionValue(spec) {
        const { filterValue } = this;
        return filterValue.spec.includes(spec);
      },
    },
  };
</script>


<style lang="scss" scoped>
  .restaurants-filters {
    display: block;
    width: 100%;
    padding: 20px;
    background-color: $background-stop;
    border-radius: 25px;
  }
  .restaurants-filters__item:not(:last-child) {
    margin-bottom: 15px;
  }
</style>
