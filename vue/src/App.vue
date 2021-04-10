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
import api from './api/api'

export default {
  name: "App",
  components: {
    Navigation
  },
  created() {
    api.getQuestions()
      .then(({data})=> {
        console.log(data);
      }).catch(({message}) => console.log(message));
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
