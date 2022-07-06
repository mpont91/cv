<template>
  <q-carousel v-model="slideSelected" animated arrows navigation infinite>
    <q-carousel-slide v-for="i in sliders" :key="i" :name="i" :img-src="i" />
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'

const sliders = [...Array(5)].map((_, i) => `/src/assets/sliders/${i + 1}.webp`)
const slideSelected = ref(sliders[(Math.random() * sliders.length) | 0])
</script>

<style scoped></style>
