<script setup>
import {useSectionsStore} from "../stores/sections.js";
import {onMounted, ref} from "vue";

const sectionsStore = useSectionsStore();
let sectionContent = ref();
let fetching = ref(true);

onMounted(() => {
  sectionsStore.getSections().then(() => {
    sectionContent.value = sectionsStore.sections.find(item => item.id === 3);
    fetching.value = false;
  })
})

</script>

<template>
  <div class="container mb-4" id="how-goskey" v-if="!fetching">
    <h2 class="text-center">
      <div v-html="sectionContent.title"></div>
    </h2>

    <div class="mb-4 p-4 bg-body-tertiary" v-for="section in sectionContent.children">
      <h3 class="text-center">
        <div v-html="section.title"></div>
      </h3>
      <div v-html="section.description"></div>
    </div>
  </div>
</template>

<style scoped>
</style>
