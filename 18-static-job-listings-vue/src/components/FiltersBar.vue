<template>
  <div 
    class="lg:max-w-7xl lg:mx-auto lg:flex lg:items-center mt-4 lg:min-h-20 border-2 bg-white rounded-md px-4"
    :class="!getFilters.length > 0 ? 'lg:justify-end' : 'lg:justify-between'"
  >
    <div class="lg:w-1/2 flex items-center flex-wrap mb-10 mt-4 lg:m-0" v-if="getFilters.length > 0">
      <JobTypeChip v-for="(filter, index) in getFilters" :key="index" :label="filter" :isRemovable="true" class="mr-4 mt-2" /> 
    </div>
    <div class="lg:flex lg:items-center lg:justify-end">
      <BaseButton class="lg:mr-2 my-4 lg:my-0" @click="isFiltersModalVisible = true">
        Filters
      </BaseButton>
      <BaseButton class="mb-4 lg:mb-0" @click="handleClearAllFilters">
        Clear
      </BaseButton>
    </div>
  </div>
  <FiltersModal v-if="isFiltersModalVisible" @close="isFiltersModalVisible = false" />
</template>

<script>
import JobTypeChip from './JobTypeChip.vue';
import BaseButton from './BaseButton.vue';
import FiltersModal from './FiltersModal.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { JobTypeChip, BaseButton, FiltersModal },
  data() {
    return {
      isFiltersModalVisible: false,
    }
  },
  methods: {
    ...mapActions(['clearAllFilters']),
    handleClearAllFilters() {
      this.clearAllFilters();
    }
  },
  computed: {
    ...mapGetters(['getAllAvailableLanguagesForFiltering', 'getAvailableToolsForFiltering', 'getFilters', 'allFilteredOffers']),
  },
}
</script>

<style>

</style>