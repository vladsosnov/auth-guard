<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppHeader from '@/components/shared/AppHeader.vue'
import AppFooter from '@/components/shared/AppFooter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
