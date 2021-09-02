<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="8" sm="8" md="8" lg="5" xl="4">
        <v-card class="mx-auto pa-2" max-width="100%" id="login">
          <v-col cols="12" sm="12" class="text-lg-center">
            <v-toolbar-title class="text-h5 pl-0" color="green">
              Login<v-icon>mdi-login</v-icon>
            </v-toolbar-title>
          </v-col>

          <v-text-field
            v-model="username"
            prepend-icon="mdi-account"
            :rules="[rules.required]"
            :type="'text'"
            label="Username"
          ></v-text-field>

          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="pwdshow ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="pwdshow ? 'text' : 'password'"
            label="Password"
            hint="At least 6 characters"
            counter
            @click:append="pwdshow = !pwdshow"
          ></v-text-field>         
              <v-btn
                variant="outlined"
                class="d-inline"
                color="green"
                width="100%"
                @click="userLogin()"
              >
                <v-icon>mdi-login</v-icon>
                login
              </v-btn>
       
       
        </v-card>
      </v-col>
    </v-row>
       
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import dataHost from '../model/dataRef.vue'

export default {
  computed: {
    get() {
      return this.$store.state.isLogon
    },
    set(val) {
      this.$store.commit('setDrawer', val)
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.replace({ name: 'index' })
    }
  },
  data() {
    return {
      pwdshow: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 6 || 'Min 6 characters',
      },

      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      console.log('Login():!')
      if (this.username && this.password) {
        const { success, Authorization } = await this.$axios.$post(
          `${dataHost.host}/api/login`,
          {
            username: this.username,
            password: this.password,
          }
        )
        console.log('res', success, Authorization)

        if (success) {
          console.log('Router', this.$router)
        }
      }
    },
    async userLogin() {
      try {
        console.log('cookie:', this.$auth.options)
        console.log('CTX', this.$auth)
        const response = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        console.log(response)

        if (response.data.success) {
          this.$store.commit('setIslogon', true)
          console.log('store logon', this.$store.state.isLogon)
          this.$router.push({ name: 'index' })
        }
      } catch (err) {
        console.log(err)
      }
    },

    async logout() {
      this.$auth.logout()
      this.$store.commit('setIslogon', false)
      console.log('logout', this.$store.state.isLogon)

      await this.$auth.logout()
    },
  },
}
</script>