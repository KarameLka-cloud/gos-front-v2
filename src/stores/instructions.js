import axios from "axios";
import {defineStore} from 'pinia'

export const useInstructionsStore = defineStore('instructions', {
  state: () => ({
    instructions: {
      list: {},
      loaded: false
    }
  }),
  getters: {},
  actions: {
    async getInstructions() {
      if (!this.instructions.loaded) {
        await axios.get(`/instructions`).then((response) => {
          this.instructions.list = response.data;
          this.instructions.loaded = true;
        })
      }
    }
  }
})
