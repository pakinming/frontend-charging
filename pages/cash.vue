<template>
  <v-container class="">
    <v-row no-gutters class="">
      <v-card class="mx-auto pa-5" max-width="100%" id="login">
        <v-col cols="12" sm="12">
          <v-toolbar-title class="text-h5 white--text pl-0">
            Cash
            <!-- <v-icon>mdi-account-plus</v-icon> -->
          </v-toolbar-title>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="cardId">Card ID</label>
            <input
              type="text"
              id="cardId"
              class="d-inline"
              width="100%"
              autocomplete="off"
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <v-btn
              @click="getCard()"
              variant="outlined"
              class="d-inline"
              color="blue"
              width="100%"
            >
              <v-icon>mdi-account-search</v-icon>
            </v-btn>
            <div class="mt-2"></div>
          </div>
          <div></div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="nameSurname"> Name - Surname</label>
            <input
              type="text"
              id="nameSurname"
              class="d-block"
              width="100%"
              autocomplete="off"
              disabled
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              disabled
              id="email"
              class="d-block"
              width="100%"
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="email"> Mobile Phone</label>
            <input
              type="text"
              disabled
              id="mobileNumber"
              class="d-block"
              width="100%"
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="email"> Cash balance</label>
            <input
              type="text"
              disabled
              id="cashBalance"
              class="d-block"
              width="100%"
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <label for="amount"> Amount Up</label>

            <input
              type="email"
              id="amount"
              class="d-block"
              width="100%"
              autocomplete="off"
              v-model.number="mobilePhone"
            />
          </div>
        </v-col>

        <v-col cols="12" sm="12">
          <div>
            <v-btn
              variant="outlined"
              class="d-inline"
              color="blue"
              width="100%"              
            >
              <v-icon>mdi-account-cash</v-icon>
            </v-btn>
            <div class="mt-2"></div>
          </div>
          <div></div>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

