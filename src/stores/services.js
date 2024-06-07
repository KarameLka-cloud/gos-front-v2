import axios from 'axios'
import {defineStore} from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({
    services: {
      list_1: {
        list: {},
        loaded: false
      },
      list_2: {
        list: {},
        loaded: false
      },
    },
  }),
  getters: {},
  actions: {
    async getServices(id) {
      if (id === 1 && !this.services.list_1.loaded) {
        await axios.get(`/services/${id}`).then((response) => {
          this.services.list_1.list = response.data;
          this.services.list_1.loaded = true;
        })
      } else if (id === 2 && !this.services.list_2.loaded) {
        await axios.get(`/services/${id}`).then((response) => {
          this.services.list_2.list = response.data;
          this.services.list_2.loaded = true;
        })
      }
    }
  }
})
