<template>
  <div>

    <div class="fixed top-0 left-0 w-full z-30 bg-gray-200">
      <div class="max-w-screen-xl mx-auto py-2 flex justify-end gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="/settings">Settings</router-link>
        <router-link to="/statistics">Statistics</router-link>
      </div>
    </div>

    <!-- MOBILE NAVIGATION (add '-x-translate-x-full' to open menu, bind variable in v-if to render/destroy container) -->
    <div class="fixed inset-0 bg-blue-300 z-40 transform transition-all duration-300 ease-in-out">
      
    </div>

  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style>

</style>