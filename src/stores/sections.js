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
    }
  }
})
