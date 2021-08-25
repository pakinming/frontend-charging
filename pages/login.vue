<template>
  <v-container justify="center" align="center">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="8" sm="8" md="8" lg="5" xl="4">
        <v-card class="mx-auto pa-2" max-width="100%" id="login">
          <v-col cols="12" sm="12">
            <v-toolbar-title class="text-h5 white--text pl-0" color="green">
              Login<v-icon>mdi-login</v-icon>
            </v-toolbar-title>
          </v-col>
          <v-col cols="12" sm="12">
            <div>
              <label for="username"><v-icon>mdi-account</v-icon> username</label>
              <input type="text" id="username" class="d-block" width="100%" v-model="username" autocomplete="off" />
            </div>
          </v-col>

          <v-col cols="12" sm="12">
            <div>
              <label for="pwd"><v-icon>mdi-lock</v-icon> Password</label>
              <input type="password" id="pwd" class="d-block" v-model="password" />
            </div>
          </v-col>

          <v-col cols="12" sm="12">
            <div>
              <v-btn
                variant="outlined"
                class="d-inline"
                color="green"
                width="100%"
                @click="login()"
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
import  dataRef  from '../model/dataRef.vue'

export default {
 
  mounted() {
    console.log(dataRef.host)
    console.log(this.$store);
    
  },
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
     async login(){
         const request = await this.$axios.$post(`${dataRef.host}/api/login`, {username:"pakin", password: '123456'})
         console.log(request);
      }
  },
}
</script>