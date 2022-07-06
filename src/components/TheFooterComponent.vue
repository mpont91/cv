<template>
  <q-footer elevated class="bg-grey-8 q-py-sm">
    <q-toolbar>
      <router-link v-slot="{ navigate }" :to="{ name: 'home' }" custom>
        <q-img
          class="cursor-pointer"
          width="50px"
          height="50px"
          :src="logo"
          @click="navigate"
        />
      </router-link>
      <router-link v-slot="{ navigate }" :to="{ name: 'home' }" custom>
        <q-toolbar-title class="cursor-pointer" @click="navigate">
          Marc Pont
        </q-toolbar-title>
      </router-link>
      <q-btn
        v-for="(link, i) in links"
        :key="i"
        :icon="link.icon"
        :href="link.href"
        target="_blank"
        round
        flat
      />
    </q-toolbar>
  </q-footer>
</template>
<script setup>
import { ref } from 'vue'
import logo from 'assets/logo.webp'
const links = ref([
  {
    icon: 'mdi-linkedin',
    href: 'https://www.linkedin.com/in/marc-pont-casadevall-282b454b/',
  },
  {
    icon: 'mdi-github',
    href: 'https://github.com/mpont91',
  },
  {
    icon: 'mdi-twitter',
    href: 'https://twitter.com/slayerbleast',
  },
  {
    icon: 'mdi-email',
    href: 'mailto:mpont91@gmail.com',
  },
])
</script>
