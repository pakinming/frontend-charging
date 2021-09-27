<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <h1>Machine</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Search"
              prepend-icon="mdi-account"
              placeholder="Your Member"
              required
              :append-outer-icon="'mdi-account-search'"
              @click:append-outer="toggleMarker"
            ></v-text-field>

            <v-text-field
              ref="surname"
              v-model="surname"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Name Surname"
              placeholder="John Doe"
              prepend-icon="mdi-account-details"
              required
              disabled
            ></v-text-field>

            <v-text-field
              ref="email"
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-MAIL"
              placeholder="example@yourmail.com"
              prepend-icon="mdi-at"
              required
              disabled
            ></v-text-field>

            <v-text-field
              ref="mobileNumber"
              v-model="mobileNumber"
              :rules="[rules.required, rules.mobileNumber]"
              label="Mobile Number"
              placeholder="123 4567"
              prepend-icon="mdi-cellphone"
              counter
              required
              disabled
            ></v-text-field>

            <v-text-field
              ref="cardId"
              v-model="cardId"
              :rules="[() => !!cardId || 'This field is required']"
              label="Card ID"
              placeholder="Select..."
              prepend-icon="mdi-credit-card-settings"
              required
              disabled
            ></v-text-field>

            <v-text-field
              ref="amount"
              v-model="amount"
              :rules="[() => !!cardId || 'This field is required']"
              label="Amount"
              placeholder="Up per"
              prepend-icon="mdi-cash-multiple"
              required
            ></v-text-field>
          </v-card-text>

          <v-divider class="mt-5"></v-divider>
       
            <v-card-actions >
              <v-btn color="primary" @click="submit" left tile block>
                <v-icon > mdi-plus </v-icon>
                Up
              </v-btn>
            </v-card-actions>
      
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    amount: null,
    marker: true,
    errorMessages: '',
    name: null,
    surname: null,
    email: null,
    mobileNumber: null,
    cardId: null,
    formHasErrors: false,
    email: '',
    rules: {
      required: (value) => !!value || 'This field is required.',
      counter: (value) => value.length <= 20 || 'Max 20 characters',
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
    items: [ ],
  }),

  computed: {
    form() {
      return {
        name: this.name,
        sername: this.surname,
        email: this.email,
        mobileNumber: this.mobileNumber,
        cardId: this.cardId,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    addressCheck() {
      this.errorMessages = this.address && !this.name ? `Hey! I'm required` : ''

      return true
    },
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        //this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true

        //this.$refs[f].validate(true)
      })
    },
  },
}
</script>