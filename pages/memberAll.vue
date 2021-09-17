
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
    <v-data-table :headers="headers" :items="desserts" :search="search" :loading="loading">
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
              <v-btn color="blue darken-1" text @click="saveAmount">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small color="blue darken-1" text @click="editItem(item)">
          <v-icon class="mr-2"> mdi-plus </v-icon>top up
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import dataRef from '../model/dataRef.vue'

export default {
  middleware: 'auth',
  data() {
    return {
      search: '',
      dialog: false,
      amount: null,
      formTitle: 'Top up',
      loading:true,
      headers: [
        {
          text: 'Username',
          align: 'start',
          // filterable: false,
          value: 'username',
        },
        {
          text: 'Surname',  value: 'surname',
        },       
        { text: 'Email', value: 'email' },

        { text: 'Mobile', value: 'mobileNumber' },
        { text: 'Register(d/m/y)', value: 'dateTime' },
       // { text: 'Cash', value: 'actions', align: 'center', filterable:false},
      ],
      desserts: [],
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
    saveAmount() {
      this.close()
    },
  },
  mounted() {
    this.$axios.get(`${dataRef.host}/api/getMemberSeller`).then((res) => {
      this.desserts = []
      this.desserts = res.data.data
      console.log(res)
      this.loading = false
    })
  },
}
</script>