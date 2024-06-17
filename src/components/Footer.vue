<script setup>
import {useSectionsStore} from "../stores/sections.js";
import {onMounted, ref} from "vue";

const sectionStore = useSectionsStore();
let sectionContent = ref();
let fetching = ref(true);

onMounted(() => {
  sectionStore.getSections().then(() => {
    sectionContent.value = sectionStore.sections.find(item => item.id === 6);
    fetching.value = false;
  })
})

</script>

<template>
  <footer class="footer container">
    <div v-if="!fetching" v-html="sectionContent.description"></div>
  </footer>
</template>

<style scoped>
.footer {
  font-size: 12px;
}

p, ul, ol {
  margin: 0;
}
</style>
