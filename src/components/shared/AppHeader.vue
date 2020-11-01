<template>
  <footer class="container mx-auto px-2 md:px-4 flex justify-between items-center">
    <router-link to="/">
      <img
        src="@/assets/images/logo.svg"
        alt="Logo"
        class="w-8 transform transition-all duration-200 hover:scale-125"
      >
    </router-link>
    <h3 class="font-semibold">
      Auth Guard
    </h3>
    <ul class="m-2 p-2 md:p-5 space-x-2 md:space-x-6 flex text-xl text-center text-white">
      <li>
        <a href="#" class="p-2 fa fa-google bg-google duration-200 ease-in hover:bg-opacity-50" />
      </li>
      <li>
        <a href="#" class="p-2 fa fa-twitter bg-twitter duration-200 ease-in hover:bg-opacity-50" />
      </li>
      <li>
        <a href="#" class="p-2 fa fa-linkedin bg-linkedin duration-200 ease-in hover:bg-opacity-50" />
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter'
})
</script>
