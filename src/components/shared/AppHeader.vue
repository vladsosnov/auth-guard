<template>
  <header class="container my-4 md:my-6 mx-auto px-2 md:px-4 flex justify-between">
    <nav class="w-full">
      <ul class="space-x-4 md:space-x-12 flex items-center text-base md:text-lg">
        <router-link
          to="/"
          tag="li"
          class="cursor-pointer"
        >
          <img
            src="@/assets/images/logo.svg"
            alt="Logo"
            class="w-8 transform hover:scale-125 transition-all duration-200"
          >
        </router-link>
        <router-link
          to="/"
          tag="li"
        >
          Main
        </router-link>
        <router-link
          to="/about"
          tag="li"
        >
          About us
        </router-link>
      </ul>
    </nav>
    <div>
      <router-link
        to="/beta-access"
        class="px-6 md:px-12 py-3 font-semibold text-white rounded-lg
        shadow-xl bg-green-500 hover:bg-green-800 transition duration-200 ease-in"
      >
        Logout
      </router-link>
      <router-link
        to="/beta-access"
        class="px-6 md:px-12 py-3 font-semibold text-white rounded-lg
        shadow-xl bg-green-500 hover:bg-green-800 transition duration-200 ease-in"
      >
        Login
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader'
})
</script>
