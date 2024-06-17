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
  <div class="container" id="where-goskey">
    <h2 class="text-center" v-if="!fetching">
      <div v-html="sectionContent.title"></div>
    </h2>
    <div class="row d-flex justify-content-around">

      <div class="accordion col-lg-5" id="services-list-1">
        <div class="accordion-item shadow-accordion">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-services-list-1" aria-expanded="true"
                    aria-controls="panelsStayOpen-services-list-1" @click="getServicesList(1)">
              <strong class="font title-button">с <span class="text-danger">УНЭП</span> Госключа вам доступно</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-services-list-1" class="accordion-collapse collapse drop-list">
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
        <div class="accordion-item shadow-accordion">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-services-list-2" aria-expanded="true"
                    aria-controls="panelsStayOpen-services-list-2" @click="getServicesList(2)">
              <strong class="font title-button">с <span class="text-danger">УКЭП</span> Госключа вам доступно</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-services-list-2" class="accordion-collapse collapse drop-list">
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

.container {
  margin-top: 80px;
  margin-bottom: 80px;
}

.title-button {
  display: inline-block;
  margin: 0 auto;
}

.shadow-accordion {
  box-shadow: 0px 2px 4px 1px grey;
}

.drop-list {
  box-shadow: 0px 2px 4px 1px grey;
}

.font {
  font-size: 26px;
  color: #833c0b;
}
</style>
