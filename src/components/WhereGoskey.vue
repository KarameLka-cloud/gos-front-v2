<script setup>
import {useServicesStore} from "../stores/services.js";
import {useSectionsStore} from "../stores/sections.js";
import {onMounted, ref} from "vue";
import ServiceBlock from "./ui/ServiceBlock.vue";
import ServiceList from "./ui/ServiceList.vue";

const servicesStore = useServicesStore();
const sectionsStore = useSectionsStore();
let sectionContent = ref();
let fetching = ref(true);

function getServicesList(id) {
  servicesStore.getServices(id);
}

onMounted(() => {
  sectionsStore.getSections().then(() => {
    sectionContent.value = sectionsStore.sections.find(item => item.id === 2);
    fetching.value = false;
  })
})
</script>

<template>
  <div class="container mb-4" id="where-goskey">
    <h2 class="text-center text-danger" v-if="!fetching">{{ sectionContent.title }}</h2>
    <div class="row d-flex justify-content-around">

      <div class="accordion col-lg-5" id="services-list-1">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-services-list-1" aria-expanded="true"
                    aria-controls="panelsStayOpen-services-list-1" @click="getServicesList(1)">
              с УНЭП Госключа вам доступно
            </button>
          </h2>
          <div id="panelsStayOpen-services-list-1" class="accordion-collapse collapse">
            <div class="max-height-400 overflow-y-auto">
              <div class="accordion-body">
                <div v-if="!servicesStore.services.list_1.loaded" class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div v-else v-for="(service, index) in servicesStore.services.list_1.list.service">
                  <ServiceBlock v-if="service.link" :service="service" :index="index + 1"/>
                  <ServiceList v-else :service="service" :index="index"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion col-lg-5" id="services-list-2">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-services-list-2" aria-expanded="true"
                    aria-controls="panelsStayOpen-services-list-2" @click="getServicesList(2)">
              с УКЭП Госключа вам доступно
            </button>
          </h2>
          <div id="panelsStayOpen-services-list-2" class="accordion-collapse collapse">
            <div class="max-height-400 overflow-y-auto">
              <div class="accordion-body">
                <div v-if="!servicesStore.services.list_2.loaded" class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div v-else v-for="(service, index) in servicesStore.services.list_2.list.service">
                  <ServiceBlock v-if="service.link" :service="service" :index="index + 1"/>
                  <ServiceList v-else :service="service" :index="index"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.max-height-400 {
  max-height: 400px;
}
</style>
