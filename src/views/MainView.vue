<template>
  <main class="container mx-auto px-2 md:px-4 text-center">
    <h1 class="mb-2 text-4xl font-semibold">
      Main page
    </h1>
    <h2 class="mb-6 text-2xl">
      Successful access to the site!
    </h2>
    <img
      src="@/assets/images/successful.gif"
      alt="Successful"
      class="inline"
    >
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainView'
})
</script>
