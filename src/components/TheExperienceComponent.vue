<template>
  <q-timeline color="secondary">
    <q-timeline-entry heading> Experience </q-timeline-entry>

    <q-timeline-entry
      v-for="(job, i) in jobs"
      :key="i"
      :title="job.title"
      :subtitle="job.subtitle"
      :body="job.body"
    />
  </q-timeline>
</template>

<script setup>
const jobs = [
  {
    title: 'Efimàtica',
    subtitle: 'Present - February, 2022',
    body: 'Develop a long-term project taking into account scalability, testability and maintenance. Following Microservices, DDD and hexagonal architecture approach, using docker and kubernetes. Working with Laravel and Vue frameworks.',
  },
  {
    title: 'Xarxafarmacèutica SL',
    subtitle: 'July, 2018',
    body: 'Unify legacy desktop applications into a single web application. Renew the intranet for customers. New web applications were made in PHP and JS, specifically with Laravel and Vue.js frameworks and Vuetify for the styles.',
  },
  {
    title: 'Global Software Partner',
    subtitle: 'September, 2016',
    body: 'Create online stores for various customers and integrate them with SAP B1. Using Magento2 framework.',
  },
  {
    title: 'Grup Puig Infante',
    subtitle: 'July, 2014',
    body: 'Revamp company websites, multiple landing pages and online stores. All the websites were made in PHP, specially with the framework Codeigniter and bootstrap library for the styles.',
  },
  {
    title: 'Ingenium Mobile ',
    subtitle: 'February, 2014',
    body: 'Create new features and fixing bugs of an existing web applications. The applications were made in PHP, specially frameworks like: Wordpress, Bootstrap, Smarty, Twig.',
  },
]
</script>

<style scoped></style>
