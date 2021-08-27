<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  middleware: 'auth',
  mounted() {
    console.log('Index',this.$auth.loggedIn)
    if (this.$auth.loggedIn) {
      this.$store.commit('setIslogon', true)
    }else{
      this.$router.replace({ name: 'login' })
    }
  },
}
</script>