<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <h1>Add Member</h1>
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
              label="Name"
              prepend-icon="mdi-account"
              placeholder="John Doe"
              required
            ></v-text-field>

            <v-text-field
              ref="surname"
              v-model="surname"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Surname"
              placeholder="John Doe"
              prepend-icon="mdi-account-details"
              required
            ></v-text-field>

            <v-text-field
              ref="email"
              v-model="email"
              :rules="[rules.required , rules.email, ]"
              label="E-MAIL"
              placeholder="example@yourmail.com"       
              prepend-icon="mdi-at"       
              required
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
            ></v-text-field>

            <v-autocomplete
              ref="cardId"
              v-model="cardId"
              :rules="[() => !!cardId || 'This field is required']"
              :items="items"
              label="CARD ID"
              placeholder="Select..."
              prepend-icon="mdi-credit-card-settings"
              required
            ></v-autocomplete>
          </v-card-text>

          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit">
              <v-icon dark right> mdi-plus </v-icon>
              ADD
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
        return pattern.test(value) || "Invalid moblie number only"
      },
    },
    items: [
      'RFID0001',
      'RFID0002',
      'RFID0003',
      'RFID0004',
      'RFID0005',
      'RFID0006',
      'RFID0010',      
    ],
    
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