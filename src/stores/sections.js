import {defineStore} from "pinia";
import axios from "axios";

export const useSectionsStore = defineStore("sections", {
  state: () => ({
    sections: {},
    fetching: true
  }),
  getters: {},
  actions: {
    async getSections() {
      await axios.get(`/sections`).then((response) => {
        this.sections = response.data;
      })
    },

    // async getSections(id) {
    //   await axios.get(`/sections?id=${id}`).then((response) => {
    //     this.sections = response.data;
    //   })
    // },
  },
  // findSection(sectionId) {
  //   return this.sections.find(item => item.id === sectionId);
  // }
})
