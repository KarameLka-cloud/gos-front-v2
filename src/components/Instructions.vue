<script setup>
import {useInstructionsStore} from "../stores/instructions.js";

const instructionsStore = useInstructionsStore();

function getInstructionsList() {
  instructionsStore.getInstructions();
}
</script>

<template>
  <div class="container">
    <div class="accordion col-lg-7 m-lg-auto" id="instructions-list">
      <div class="accordion-item shadow-accordion">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-instructions-list" aria-expanded="true"
                  aria-controls="panelsStayOpen-instructions-list" @click="getInstructionsList">
            <strong class="font title-button">Инструкции и видеоматериалы по Госключу</strong>
          </button>
        </h2>
        <div id="panelsStayOpen-instructions-list" class="accordion-collapse collapse drop-list">
          <div class="max-height-400 overflow-y-auto">
            <div class="accordion-body">
              <div v-if="!instructionsStore.instructions.loaded" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div v-else>
                <a :href="instruction.link" class="d-block pt-2 pb-2 text-decoration-none" target="_blank"
                   v-for="(instruction, index) in instructionsStore.instructions.list">{{ index + 1 }}.
                  {{ instruction.title }}</a>
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
