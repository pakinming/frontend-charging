
<template>
  <v-card>
    <v-card-title>My Card</v-card-title>
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
      :loading="loading"
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import dataRef from '../model/dataRef.vue'

export default {
  middleware: 'auth',
 data () {
      return {
        search: '',
        loading:true,
        headers: [
          {
            text: 'Card ID',
            align: 'start',
            // filterable: false,
            value: 'cardId',
          },
          { text: 'Owner', value: 'owner' },
          { text: 'Balance Amount', value: 'amount' },

          { text: 'Status', value: 'status' },
          { text: 'Register(d/m/y)', value: 'registerData' },          
        ],
        desserts: [
          
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
  mounted() {
    this.$axios.get(`${dataRef.host}/api/getAllCard`).then( (res) => {
        console.log(res.data.data);
        this.desserts = res.data.data
        this.loading = false
      })
  },
}
</script>