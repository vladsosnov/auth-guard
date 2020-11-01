<template>
  <div
    id="app"
    class="h-screen flex flex-col justify-between bg-pink-100"
  >
    <app-header />
    <transition name="zoom">
      <router-view />
    </transition>
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

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: .4s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 1;
  }
}
</style>
