<script setup>
import {ref} from "vue";
import ServiceBlock from "./ServiceBlock.vue";

const props = defineProps({
  service: Object,
  index: Number,
});
</script>

<template>
  <div class="accordion mt-3" id="services-sub-list">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#panelsStayOpen-services-sub-list-${service.id}`"
                aria-expanded="true"
                :aria-controls="`panelsStayOpen-services-sub-list-${service.id}`">
          {{ index + 1 }}. {{ service.title }}
        </button>
      </h2>
      <div :id="`panelsStayOpen-services-sub-list-${service.id}`" class="accordion-collapse collapse">
        <div class="max-height-400 overflow-y-auto">
          <div class="accordion-body">
            <div>
              <ServiceBlock v-for="service in service.children" :key="service.id" :service="service"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
