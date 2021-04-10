<template>
  <div>
    REGISTER

    <form @submit.prevent="login(username, password)" class="flex flex-col gap-4 mt-4">
        <div>
            <label for="username">Username </label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label for="password">Password </label>
            <input type="password" v-model="password">
        </div>

        <button type="submit" class="bg-blue-400 cursor-pointer self-center px-4 py-2">
            Login
        </button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
      return {
          username: '',
          password: '',
      }
  },
  methods: {
    login(username, password) {
        this.$store.dispatch('user/login', {username, password})
    }
  }
}
</script>

<style>

</style>