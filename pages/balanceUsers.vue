<template>
  <v-container>
    <v-row justify="center">
      <v-col justify="center" cols="12" sm="10" md="8" lg="6">
        <h1>Check you balance</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-text-field
                ref="username"
                v-model="username"
                :rules="[rules.required]"
                :error-messages="errorMessages"
                label="Search"
                prepend-icon="mdi-magnify"
                placeholder="username or email or phone"
                required
                counter=""
                autocomplete="off"
              ></v-text-field>
            </v-card-text>

            <v-divider class="mt-5"></v-divider>

            <v-card-actions>
              <v-btn color="primary" @click="submit" text block> Submit </v-btn>
            </v-card-actions>
            <v-dialog top v-model="balanceUser" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">Balance</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-list>
                        <v-list-item>
                          <v-list-item-action>
                            <v-list-item-title>Username</v-list-item-title>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title v-text="items.owner" />
                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list-item>
                          <v-list-item-action>
                            <v-list-item-title>balance</v-list-item-title>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title v-text="items.amount" />
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                      </v-list>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="balanceUser = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-alert dense text type="success" :value="alertSuccess">
              Successfully
            </v-alert>
            <v-alert dense text type="error" :value="alertError">
              Error <strong>{{ errorMessages }}</strong> try again
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import dataRef from '../model/dataRef.vue'

export default {
  data: () => ({
    errorMessages: '',
    balanceUser: false,
    username: null,

    formHasErrors: false,
    desserts: [],
    loading: true,
    valid: true,
    alertSuccess: false,
    alertError: false,
    items: {
      username: 'Balance1',
      email: 'acb@jinapo.com',
      phone: '0987654321',
      seller: { username: 'Seller1' },
      amount: 100,
    },

    rules: {
      required: (value) => !!value || 'This field is required.',
      counter: (value) => value.length > 6 || 'Max 20 characters',
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
      mobileNumber: (value) => {
        const pattern = /^([0-9]*)$/
        return pattern.test(value) || 'Invalid moblie number only'
      },
    },
    cards: [],
  }),

  computed: {
    form() {
      return {
        username: this.username,
      }
    },
  },

  methods: {
    submit() {
      this.$axios
        .get('/api/checkBalance/' + this.username)
        .then((response) => {
          this.items = response.data.data
          this.balanceUser = true
        })
        .catch((error) => {
          this.errorMessages = error.response.data.message
          this.alertError = true
        })
    },
  },
}
</script>
