<template>
  <div class="px-6 pb-8 lg:max-w-7xl lg:mx-auto">
    <LoadingSpinner v-if="!allFilteredOffers.length > 0 && !$store.state.isListFiltered" text="Loading job offers. Please wait..." />
    <div v-else>
      <div v-if="allFilteredOffers.length > 0">
        <JobOffer 
          v-for="jobOffer in allFilteredOffers"
          :key="jobOffer.id"
          :company="jobOffer.company"
          :logoUrl="jobOffer.logo"
          :isNew="jobOffer.isNew"
          :isFeatured="jobOffer.isFeatured"
          :position="jobOffer.position"
          :role="jobOffer.role"
          :level="jobOffer.level"
          :postedAt="jobOffer.postedAt"
          :contract="jobOffer.contract"
          :location="jobOffer.location"
          :languages="jobOffer.languages"
          :tools="jobOffer.tools"
        />
      </div>
      <NoJobOffersMsg v-else />
    </div>
  </div>
</template>

<script>
import JobOffer from './JobOffer.vue';
import NoJobOffersMsg from './NoJobOffersMsg.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: { JobOffer, NoJobOffersMsg, LoadingSpinner },
  methods: {
    ...mapActions(['getAbailableJobOffers']),
  },
  computed: {
    ...mapGetters(['allJobOffers', 'allFilteredOffers']),
  },
  mounted() {
    this.getAbailableJobOffers();
  }
}
</script>

<style>

</style>