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
  <div class="container mt-4" id="what-goskey">
    <h2 class="text-center" v-if="!fetching">
      <div v-html="sectionContent.title"></div>
    </h2>
    <div class="text p-4 background" v-if="!fetching" v-html="sectionContent.description">
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #fbe5d6;
  border-radius: 40px;
  box-shadow: 0px 2px 4px 1px grey;
}

.text {
  text-align: justify;
}
</style>
