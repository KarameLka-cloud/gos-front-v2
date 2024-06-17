<script setup>
import Navigation from "./components/Navigation.vue";
import WhatGoskey from "./components/WhatGoskey.vue";
import WhereGoskey from "./components/WhereGoskey.vue";
import HowGoskey from "./components/HowGoskey.vue";
import Instructions from "./components/Instructions.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="main container mt-3 mb-3 pb-3">
    <Navigation/>
    <WhatGoskey/>
    <WhereGoskey/>
    <HowGoskey/>
    <Instructions/>
    <Footer/>
  </div>
</template>

<style scoped>
.main {
  box-shadow: 0px 0px 8px 2px grey;
}
</style>
