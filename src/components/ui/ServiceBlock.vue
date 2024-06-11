<script setup>
import {ref} from "vue";
import ModalWindow from "./ModalWindow.vue";

const props = defineProps({
  service: Object,
  index: {
    type: Number,
    default: '•'
  }
});

let isVisibleModal = ref(false);

function toggleModal() {
  isVisibleModal.value = !isVisibleModal.value;
}
</script>

<template>
  <ModalWindow :description="service.description" v-show="isVisibleModal" :toggleModal="toggleModal"/>
  <div class="mb-2">
    <a v-if="service.link" :href="service.link" target="_blank"
       class="text-decoration-none">
      {{ typeof index !== "string" ? `${index}.` : index }}
      {{ service.title }}
    </a>
    <img src="../../assets/question.svg" alt="" v-if="service.description" class="modal-img d-inline-block mx-1"
         height="25"
         @click="toggleModal">
  </div>
</template>

<style scoped>
.modal-img {
  cursor: pointer;
}
</style>
