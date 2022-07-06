<template>
  <q-timeline color="secondary">
    <q-timeline-entry heading> Education </q-timeline-entry>
    <q-timeline-entry
      v-for="(item, i) in education"
      :key="i"
      :title="item.title"
      :subtitle="item.subtitle"
      :body="item.body"
    />
  </q-timeline>
</template>

<script setup>
const education = [
  {
    title: 'Computer Engineering',
    subtitle: '2012 - 2015',
    body: 'Universitat de Girona',
  },
  {
    title: 'Technical Engineering in Computer Systems',
    subtitle: '2009 - 2012',
    body: 'Universitat de Girona',
  },
]
</script>
