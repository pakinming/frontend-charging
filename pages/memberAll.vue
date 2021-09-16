
<template>
  <v-card>
    <v-card-title>Your member</v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search">
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>

            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name"
                      v-model="editedItem.name"
                      readonly
                      filled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Card ID"
                      v-model="editedItem.cardId"
                      readonly
                      filled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Amount"
                      v-model="amount"
                      placeholder="0"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small color="blue darken-1" text @click="editItem(item)">
          <v-icon class="mr-2">
            mdi-plus
          </v-icon>top up
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      search: '',
      dialog: false,
      amount: null,
      formTitle:"Top up",
      headers: [
        {
          text: 'Name',
          align: 'start',
          // filterable: false,
          value: 'name',
        },
        { text: 'Card ID', value: 'cardId' },
        { text: 'Email', value: 'email' },

        { text: 'Mobile', value: 'MobileNumber' },
        { text: 'Register(d/m/y)', value: 'datetime' },
        { text: 'Amount', value: 'actions', align:"center" },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          email: 'Frozen@outlook.com',
          cardId: 'X8KSU3BHSA7G8N9ELI6AE8V1S',
          MobileNumber: '0926851753',
          datetime: '02/09/2021',
        },
        {
          name: 'Ice cream sandwich',
          email: 'Icecream@gmail.com',
          cardId: '8J5E8IPD8BJVA3H7RIUKEB5NW',
          MobileNumber: '0874807983',
          datetime: '04/09/2021',
        },
        {
          name: 'Eclair',
          email: 'Eclair@gmail.com',
          cardId: 'QUEXGRYRL6R0BFDC3NMFHGVYP',
          MobileNumber: '0699976921',
          datetime: '01/09/2021',
        },
        {
          name: 'Cupcake',
          email: 'Cupcake@gmail.com',
          cardId: 'TWX95NW7GIELRQDM90R7S8YIV',
          MobileNumber: '0921900076',
          datetime: '01/09/2021',
        },
        {
          name: 'Gingerbread',
          email: 'Ginger@gmail.com',
          cardId: 'P2JRV5YOLDXJT80RJ06EDTFFM',
          MobileNumber: '0990286516',
          datetime: '01/09/2021',
        },
        {
          name: 'Jelly bean',
          email: 'jellybean@hotmail.com',
          cardId: 'XDM6TJ1APJBC3W5IT9U5RRJIU',
          MobileNumber: '0863958440',
          datetime: '01/09/2021',
        },
        {
          name: 'Lollipop',
          email: 'Lollipop@pop.catch.com',
          cardId: 'LL8VPE2LDAKSMF701UAU567GN',
          MobileNumber: '0997912599',
          datetime: '01/09/2021',
        },
        {
          name: 'Honeycomb',
          email: 'Honeycomb@ada.co.en',
          cardId: 'J4XF47TMIIHO0RPO5S6YEW5V8',
          MobileNumber: '0965202286',
          datetime: '07/09/2021',
        },
        {
          name: 'Donut',
          email: 'Donuty@mail.com',
          cardId: 'YWWYGP82C2L1CXV0J41GA8OHU',
          MobileNumber: '0981591588',
          datetime: '05/09/2021',
        },
        {
          name: 'KitKat',
          email: 'KitKat@me.co.th',
          cardId: 'E50WRDRQBNJQ6E19D9PELQXX9',
          MobileNumber: '0979489607',
          datetime: '05/09/2021',
        },
      ],
      editedItem: {
        name: '',
        email: 0,
        cardId: 0,
        MobileNumber: 0,
        datetime: 0,
      },
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== 'Name')
    },

  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
    editItem(item) {
      // this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      console.log('item', item)
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      })
    },
    save() {
      this.close()
    },
  },
}
</script>