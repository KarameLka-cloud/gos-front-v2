import {defineStore} from "pinia";
import axios from "axios";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: {}
  }),
  getters: {},
  actions: {
    async getCategories() {
      await axios.get(`/categories`).then((response) => {
        this.categories = response.data;
      })
    }
  }
})
