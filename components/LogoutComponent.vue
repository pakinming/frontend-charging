<template>
  <v-btn icon @click="logout()" v-if="showMenu()">
    <v-icon>mdi-logout</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  methods: {
    showMenu() {
      return this.$store.state.isLogon
    },
    logout() {
      this.$auth.logout()
      this.$store.commit('setIslogon', false)
      console.log('logout', this.$store.state.isLogon)
    },
  },
}
</script>