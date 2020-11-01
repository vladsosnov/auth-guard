<template>
  <main class="container mx-auto px-2 md:px-4 flex-col justify-center text-center">
    <h1 class="text-4xl md:text-6xl text-gray-800">
      404
    </h1>
    <h2 class="mb-2 text-2xl font-semibold uppercase text-gray-600">
      Page Not Found
    </h2>
    <p>
      Sorry, but the page you are looking for has not been found.
    </p>
    <p>
      Try checking the URL for error, or
      <router-link
        to="/"
        class="font-semibold"
      >
        return to the homepage...
      </router-link>
    </p>
    <img
      src="@/assets/images/not-found.gif"
      alt="Not Found"
      class="inline"
    >
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NotFoundView'
})
</script>
