<template>
  <div>
    <Navigation/>

    <!-- PAGE -->
    <div class="pt-10 h-screen max-h-screen bg-gray-300">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: "App",
  components: {
    Navigation
  },
  mounted() {
    if(window.sessionStorage.getItem('token')) {
      this.$store.dispatch('user/profile');
    }

    // this.$store.dispatch('user/login');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
