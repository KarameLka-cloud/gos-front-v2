<script setup>
import {useInstructionsStore} from "../stores/instructions.js";

const instructionsStore = useInstructionsStore();

function getInstructionsList() {
  instructionsStore.getInstructions();
}
</script>

<template>
  <div class="container mb-4">
    <div class="accordion col-lg-10 m-lg-auto" id="instructions-list">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-instructions-list" aria-expanded="true"
                  aria-controls="panelsStayOpen-instructions-list" @click="getInstructionsList">
            <strong>Инструкции и видеоматериалы по Госключу</strong>
          </button>
        </h2>
        <div id="panelsStayOpen-instructions-list" class="accordion-collapse collapse">
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
</style>
