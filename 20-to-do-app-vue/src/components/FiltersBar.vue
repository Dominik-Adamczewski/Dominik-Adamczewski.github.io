<template>
  <div 
    class="w-full mt-4 rounded-md py-2 flex items-center justify-around flex-wrap"
    :class="{ 'bg-proj-20-dark-theme-very-dark-grayish-blue': isDarkThemeEnabled, 'bg-white border': !isDarkThemeEnabled }"
  >
    <FilterOption 
      v-for="(filterOption, index) in filterOptions" 
      :key="index"
      :text="filterOption.text"
      :is-chosen="filterOption.isChosen"
      @change-filter="changeCurrentFilter"
    />
  </div>
  <div class="text-center mt-6 text-gray-500 pb-6">Drag and drop to reorder list</div>
</template>

<script>
  import FilterOption from './FilterOption.vue';
  export default {
    components: { FilterOption },
    props: {
      toDoList: {
        type: Array,
        required: true,
      },
      isDarkThemeEnabled: {
        type: Boolean,
        required: true,
      }
    },
    data() {
      return {
        filterOptions: [
          { text: 'All', isChosen: false, },
          { text: 'Active', isChosen: false, },
          { text: 'Completed', isChosen: false, },
        ],
      }
    },
    methods: {
      changeCurrentFilter(clickedFilterText) {
        const index = this.filterOptions.findIndex(element => element.text === clickedFilterText);
        this.filterOptions.forEach(filterOption => {
          filterOption.isChosen = false;
        });
        this.filterOptions[index].isChosen = true;
        this.$emit('change-filter', this.filterOptions[index]);
      },
      setDefaultFilter() {
        this.filterOptions.forEach(filter => {
          filter.isChosen = false;
        });
        const index = this.filterOptions.findIndex(element => element.text === 'All');
        this.filterOptions[index].isChosen = true;
      }
    },
    computed: {
      completedTodos() {
        // const allToDos = JSON.parse(localStorage.getItem('toDoList'));
        return this.toDoList.filter(item => item.isDone).length;
      }
    },
    mounted() {
      this.setDefaultFilter();
    }
  }
</script>

<style></style>
