<template>
  <div>

    <div class="fixed top-0 left-0 w-full z-30 px-4 bg-gray-200">
      <div v-if="user" class="max-w-screen-xl mx-auto py-2 hidden md:flex justify-end gap-4">
        <div class="flex gap-4">
          <router-link to="/">Home</router-link>
          <router-link to="/settings">Settings</router-link>
          <router-link to="/statistics">Statistics</router-link>
          <div @click="logout()">Logout</div>
        </div>
      </div>
      <div v-if="user" @click="openMenu" class="flex md:hidden justify-end py-2 text-2xl">
        <i class="fas fa-bars"></i>
      </div>
    </div>


    <!-- MOBILE NAVIGATION -->
    <div v-if="user" class="fixed h-screen w-full top-0 bg-gray-200 z-40 transition-all duration-300" style="left: -100%" :style="is_menuOpen ? 'left: 0' : ''">
      <div @click="closeMenu" class="flex justify-end py-2 px-4 text-2xl">
        <i class="fas fa-times"></i>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "Navigation",
  data()  {
    return {
      //
    }
  },
  computed: {
    ...mapState(['is_menuOpen']),
    ...mapState('user', ['user']),
  },
  methods: {
    openMenu() {
      this.$store.commit('OPEN_MENU')
    },
    closeMenu() {
      this.$store.commit('CLOSE_MENU')
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style>

</style>