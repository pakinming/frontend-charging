
<template>
  <v-card>
      <v-card-title>History</v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  middleware: 'auth',
 data () {
      return {
        search: '',
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
          { text: 'Register Date (dd/mm/yyyy)', value: 'datetime' },
      
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
  },
}
</script>