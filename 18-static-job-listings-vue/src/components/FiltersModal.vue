<template>
  <div class="relative">
    <div class="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
    <div class="fixed md:top-20 bottom-0 left-0 w-full flex items-center justify-center z-20">
      <div class="relative bg-white w-full md:max-w-lg lg:max-w-xl min-h-96 rounded-md p-8">
        <h2 class="text-2xl font-semibold mb-4">Filter job offers</h2>
        <span class="material-symbols-outlined absolute top-4 right-4 cursor-pointer" @click="$emit('close')">close</span>
        <div>
          <FilterCheckboxesSection sectionName="Languages" :filtersArray="getAllAvailableLanguagesForFiltering" />
          <FilterCheckboxesSection sectionName="Tools" :filtersArray="getAvailableToolsForFiltering" />
          <FilterCheckboxesSection sectionName="Seniority Levels" :filtersArray="getAvailableSeniorityLevelsForFiltering" />
        </div>
        <div class="flex items-center justify-between mt-8">
          <BaseButton>Clear</BaseButton>
          <BaseButton :isMainCTA="true" @click="filterJobOffersFromModal">Show results</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterCheckboxesSection from './FilterCheckboxesSection.vue';
import BaseButton from './BaseButton.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { FilterCheckboxesSection, BaseButton },
  methods: {
    ...mapActions(['applyFiltersFromModa']),
    filterJobOffersFromModal() {
      this.applyFiltersFromModa();
      this.$emit('close');
    }
  },
    computed: {
    ...mapGetters(['getAllAvailableLanguagesForFiltering', 'getAvailableToolsForFiltering', 'getAvailableSeniorityLevelsForFiltering']),
  },
  mounted() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  },
  unmounted() {
    document.body.style.overflow = '';
    document.body.style.height = '';
  }
}
</script>

<style>

</style>