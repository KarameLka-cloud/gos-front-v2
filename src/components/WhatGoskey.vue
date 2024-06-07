<script setup>
import {useSectionsStore} from "../stores/sections.js";
import {onMounted, ref} from "vue";

const sectionsStore = useSectionsStore();
let sectionContent = ref();
let fetching = ref(true);

onMounted(() => {
  sectionsStore.getSections().then(() => {
    sectionContent.value = sectionsStore.sections.find(item => item.id === 1);
    fetching.value = false;
  });
})
</script>

<template>
  <div class="container mb-4" id="what-goskey">
    <h2 class="text-center text-danger" v-if="!fetching">
      <img src="../assets/goskey.png" alt="" height="40">
      {{ sectionContent.title }}
    </h2>
    <div class="text p-4 bg-body-tertiary" v-if="!fetching" v-html="sectionContent.description">
    </div>
  </div>
</template>

<style scoped>
.text {
  text-align: justify;
}
</style>
