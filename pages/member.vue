<template>
  <v-container class="">
    <v-row no-gutters class="">
      <v-card class="mx-auto pa-5" max-width="100%" id="login">
        <v-col cols="12" sm="12">
          <v-toolbar-title class="text-h5 white--text pl-0">
            Member
          </v-toolbar-title>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="name">Name</label>
            <input
              type="name"
              id="name"
              class="d-block"
              width="100%"
              autocomplete="off"
              
            />
          </div>
        </v-col>
        <v-col cols="12" sm="12">
          <div>
            <label for="surname"> Surname</label>
            <input
              type="surname"
              id="surname"
              class="d-block"
              width="100%"
              autocomplete="off"
             
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="email"> Email</label>
            <input
              type="email"
              id="email"
              class="d-block"
              width="100%"
              
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="mobilePhone"> Mobile Number</label>
            <input
              type="number"
              id="mobilePhone"
              class="d-block"
              width="100%"
              autocomplete="off"
             
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="cardId">Card ID</label>
            <select class="" >
              <option class="" >
                
              </option>
            </select>
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <v-btn
              variant="outlined"
              class="d-inline"
              color="blue"
              width="100%"
              @click="getCardId()"
            >
              <v-icon>mdi-account-plus</v-icon>
              Add member
            </v-btn>

            <div class="mt-2"></div>
          </div>
          <div></div>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
    middleware: 'auth',
}
</script>