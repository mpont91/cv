<template>
  <q-layout view="hhh lpr fff">
    <the-header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
    <the-footer-component />
  </q-layout>
</template>
<script setup>
import TheHeaderComponent from 'components/TheHeaderComponent.vue'
import TheFooterComponent from 'components/TheFooterComponent.vue'
</script>
