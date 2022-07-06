<template>
  <q-header elevated>
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
      <q-btn-toggle
        v-model="linkSelected"
        flat
        stretch
        toggle-color="yellow"
        :options="linkOptions"
        @update:model-value="linkNavigate"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logo from 'assets/logo.webp'

const route = useRoute()
const router = useRouter()
const linkSelected = ref(route.name)
const linkOptions = [
  { label: 'Home', value: 'home' },
  { label: 'Experience', value: 'experience' },
  { label: 'Education', value: 'education' },
  { label: 'Skills', value: 'skills' },
  { label: 'About', value: 'about' },
  { label: 'Portfolio', value: 'portfolio' },
]
const linkNavigate = (routeName) => {
  router.push({ name: routeName })
}
</script>
