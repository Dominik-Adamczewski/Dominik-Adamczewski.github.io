<template>
  <div :class="{'scroll-block': isScrollingBlocked}">
    <header class="mb-10">
    <div 
      class="
        bg-[url('../18-static-job-listings-vue/public/images/bg-header-mobile.svg')] 
        lg:bg-[url('../18-static-job-listings-vue/public/images/bg-header-desktop.svg')] 
        bg-cover 
        bg-center 
        min-h-40"
    >
    </div>
    <div class="px-6">
      <FiltersBar @modal-opened="isScrollingBlocked = true" @modal-closed="isScrollingBlocked = false" />
    </div>
    </header>
    <JobList />
  </div>
</template>

<script>
import JobList from './components/JobList.vue';
import FiltersBar from './components/FiltersBar.vue';

export default {
  name: "App",
  components: { JobList, FiltersBar },
  data() {
    return {
      isScrollingBlocked: false,
    }
  }
};
</script>

<style>
  .scroll-block {
    overflow: hidden;
    height: 100vh;
  }
</style>
