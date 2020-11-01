<template>
  <main class="container mx-auto px-2 md:px-4">
    <h1 class="max-w-xl mx-auto mb-6 md:mb-12 hidden md:block text-center font-bold text-lg md:text-2xl text-center">
      Welcome aboard new buddy! We are sure that you will prove to be a great addition to our team!
    </h1>
    <div class="flex items-center flex-col md:flex-row">
      <div class="md:w-1/2 mb-6 mb:0 text-center">
        <h2 class="max-w-md mx-auto">
          The site is not ready yet and should be expected in the future. Please try again 10.11.2020
        </h2>
        <img
          src="@/assets/images/repair.gif"
          alt="repait"
          class="hidden md:inline"
        >
      </div>
      <div class="max-w-sm mx-auto flex flex-col items-center">
        <img
          src="@/assets/images/user.svg"
          alt="user"
          class="w-32 mb-4"
        >
        <h2 class="mb-6 text-center font-semibold text-black">
          If you have code - write here and get all access to the site right now!
        </h2>
        <form
          class="w-full"
        >
          <input
            placeholder="Your code..."
            type="password"
            minlength="6"
            class="w-full mb-4 p-3 rounded-lg bg-white border-2 border-gray-300
            placeholder-gray-600 shadow-md focus:placeholder-gray-500
            focus:border-gray-600 focus:outline-none"
          >
          <button
            type="submit"
            class="w-full mb-2 py-3 font-semibold text-white rounded-lg
            shadow-xl bg-green-500 hover:bg-green-800 transition duration-200 ease-in"
          >
            Login
          </button>
          <span
            class="text-red-500 font-semibold"
          >
            The code is incorrect!
          </span>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BetaAccess'
})
</script>
