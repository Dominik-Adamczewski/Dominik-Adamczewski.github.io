import { createStore } from "vuex";

export default createStore({
  state: {
    jobOffers: [],
    filteredOffers: [],
    currentFilters: [],
    currentModalFilters: [],
    isListFiltered: false,
  },
  getters: {
    allJobOffers(state) {
      return state.jobOffers;
    },
    allFilteredOffers(state) {
      return state.filteredOffers;
    },
    getFilters(state) {
      return state.currentFilters;
    },
    getAllAvailableLanguagesForFiltering(state) {
      const languages = [];
      state.jobOffers.forEach(jobOffer => {
        jobOffer.languages.forEach(language => {
          if (!languages.includes(language)) {
            languages.push(language);
          }
        });
      });
      return languages;
    },
    getAvailableToolsForFiltering(state) {
      const tools = [];
      state.jobOffers.forEach(jobOffer => {
        jobOffer.tools.forEach(tool => {
          if (!tools.includes(tool)) {
            tools.push(tool);
          }
        });
      });
      return tools;
    },
    getAvailableSeniorityLevelsForFiltering(state) {
      const seniorityLvls = [];
      state.jobOffers.forEach(jobOffer => {
        if (!seniorityLvls.includes(jobOffer.level)) {
          seniorityLvls.push(jobOffer.level);
        }
      });
      return seniorityLvls;
    },
  },
  mutations: {
    applyFilters(state) {
      state.filteredOffers = state.jobOffers.filter(jobOffer =>
        state.currentFilters.every(filter =>
          jobOffer.languages.includes(filter) ||
          jobOffer.tools.includes(filter) ||
          jobOffer.level === filter
        )
      );
      state.isListFiltered = true;
      console.log(state.filteredOffers);
    },
    applyFiltersFromModal(state) {
      state.currentModalFilters.forEach(modalFilter => {
        if (!state.currentFilters.includes(modalFilter)) {
          state.currentFilters.push(modalFilter);
        } else {
          state.currentFilters = state.currentFilters.filter(filter => filter === modalFilter);
        }
      });
      this.commit('applyFilters');
    },
    setJobOffers(state, jobOffers) {
      state.jobOffers = jobOffers;
      state.filteredOffers = jobOffers;
    },
    setFilter(state, label) {
      if (!state.currentFilters.includes(label)) {
        state.currentFilters.push(label);
      }
      if (!state.currentModalFilters.includes(label)) {
        state.currentModalFilters.push(label);
      }
      state.isListFiltered = true;
      this.commit('applyFilters');
    },
    addModalFilter(state, label) {
      if (state.currentModalFilters.includes(label)) {
        state.currentModalFilters = state.currentModalFilters.filter(item => item !== label);
      } else {
        state.currentModalFilters = [...state.currentModalFilters, label];
      }
    },
    removeFilter(state, label) {
      state.currentFilters = state.currentFilters.filter(filter => filter !== label);
    
      state.currentModalFilters = state.currentModalFilters.filter(filter => filter !== label);
    
      if (state.currentFilters.length > 0) {
        this.commit('applyFilters');
      } else {
        state.filteredOffers = state.jobOffers;
        state.isListFiltered = false;
      }
    },
    clearAllFilters(state) {
      state.currentFilters = [];
      state.currentModalFilters = [];
      state.filteredOffers = state.jobOffers;
      state.isListFiltered = false;
    },
    filterOffers(state) {
      state.isListFiltered = true;
      this.commit('applyFilters');
    },
  },
  actions: {
    async getAbailableJobOffers({ commit }) {
      // fake 1 second loading to simulate loading job offers from server, and display spinner
      setTimeout(async () => {
        const data = await fetch('/data/data.json');
        const json = await data.json();
        commit('setJobOffers', json);
      }, 1000)
    },
    addFilterFromChip({ commit }, label) {
      commit('setFilter', label);
    },
    clearFilterFromChip({ commit }, label) {
      commit('removeFilter', label);
    },
    clearAllFilters({ commit }) {
      commit('clearAllFilters');
    },
    filterOutJobOffers({ commit }) {
      commit('filterOffers');
    },
    applyFiltersFromModa({ commit }) {
      commit('applyFiltersFromModal');
    }
  },
});
