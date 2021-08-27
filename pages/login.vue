<template>
  <v-container justify="center" align="center">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="8" sm="8" md="8" lg="5" xl="4">
        <v-card class="mx-auto pa-2" max-width="100%" id="login">
          <v-col cols="12" sm="12" class="text-lg-center">
            <v-toolbar-title class="text-h5 pl-0" color="green">
              Login<v-icon>mdi-login</v-icon>
            </v-toolbar-title>
          </v-col>
          <v-col cols="12" sm="12">
            <div>
              <label for="username"
                ><v-icon>mdi-account</v-icon> username</label
              >
              <input
                type="text"
                id="username"
                class="d-block"
                width="100%"
                v-model="username"
                autocomplete="off"
              />
            </div>
          </v-col>

          <v-col cols="12" sm="12">
            <div>
              <label for="pwd"><v-icon>mdi-lock</v-icon> Password</label>
              <input
                type="password"
                id="pwd"
                class="d-block"
                v-model="password"
              />
            </div>
          </v-col>

          <v-col cols="12" sm="12">
            <div>
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
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
input {
  border-style: none none inset none;
  width: 100%;
  font-size: 20px;
  justify-content: center;
  outline: none;
  border-radius: none;
}
a {
  text-decoration: none;
  font-size: 16px;
}
#login {
  background-color: rgb(221, 216, 216, 0.1);
}
.notMember {
  font-size: 9px;
}
.notMember :hover {
  background-color: azure;
  color: blue;
}
</style>
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
    if(this.$auth.loggedIn){
      this.$router.replace({name: "index"})
    }
  },
  data() {
    return {
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