<template>
  <header class="top-background min-h-[30vh] p-6 flex flex-col items-center overflow-visible relative">
    <section class="h-full w-full">
      <h1 class="text-2xl text-center text-white font-semibold mb-7">IP Address Tracker</h1>
      <IpInputField
        @ip-data-fetched="store.handleIpDataFetch"
        @reset-app="store.resetApp"
        @loading-started="store.isLoading = true"
        class="mb-4"
      />
    </section>
    <LoadingChip v-if="store.isLoading" class="mt-8" />
    <ResultsBox v-if="store.isIpFetchSuccessful" :ip-data-results="store.ipData.baseDataArray" class="absolute z-10 top-44" />
  </header>
  <section class="px-6 min-h-[70vh] pt-24 z-0" :class="{ 'bottom-background': !store.isIpFetchSuccessful }" id="map"></section>
</template>
napraw tylko jeszcze to, że spinner pojawia się na placeholder mapie
<script setup>
import IpInputField from './components/IpInputField.vue';
import ResultsBox from './components/ResultsBox.vue';
import LoadingChip from './components/LoadingChip.vue';
import { useIpTrackerStore } from '../stores/ipTrackerStore';

const store = useIpTrackerStore();
</script>

<style scoped lang="scss">
  .top-background {
    background-image: url('../public/images/pattern-bg-mobile.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-height: 768px) {
      background-image: url('../public/images/pattern-bg-desktop.png');
    }
  }

  .bottom-background {
    background-image: url('../public/images/map-placeholder-image.png');
  }
</style>
