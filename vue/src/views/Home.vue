<template>
  <div>
    Home

    <div v-if="user">
      <p>Hello {{ user.username }}</p>
      <p>Your email is: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>

<style>

</style>