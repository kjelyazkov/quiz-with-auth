<template>
  <div>

    <div class="fixed top-0 left-0 w-full z-30 px-4 bg-gray-200">
      <div class="max-w-screen-xl mx-auto py-2 hidden md:flex justify-end gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="/settings">Settings</router-link>
        <router-link to="/statistics">Statistics</router-link>
      </div>
      <div @click="is_menuOpen = !is_menuOpen" class="flex md:hidden justify-end py-2 text-3xl">
        <i class="fas fa-bars"></i>
      </div>
    </div>

    <!-- MOBILE NAVIGATION -->
    <div class="fixed h-screen w-full top-0 bg-gray-200 z-40 transition-all duration-300" style="left: -100%" :style="is_menuOpen ? 'left: 0' : ''">
      <div @click="is_menuOpen = !is_menuOpen" class="flex justify-end py-2 px-4 text-3xl">
        <i class="fas fa-times"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Navigation",
  data()  {
    return {
      is_menuOpen: false,
    }
  }
}
</script>

<style>

</style>