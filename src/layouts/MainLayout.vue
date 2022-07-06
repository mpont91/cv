<template>
  <q-layout view="hhh lpr fff">
    <the-header-component />
    <the-sliders-component />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
    <the-footer-component />
  </q-layout>
</template>

<script setup>
import TheSlidersComponent from 'components/TheSlidersComponent.vue'
import TheHeaderComponent from 'components/TheHeaderComponent.vue'
import TheFooterComponent from 'components/TheFooterComponent.vue'
</script>
