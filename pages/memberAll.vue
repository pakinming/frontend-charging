
<template>
  <v-card>
    <v-card-title>Your member</v-card-title>

    <v-card-title>
      <v-btn color="success" @click="dialog = !dialog"> New Member </v-btn>
    </v-card-title>

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
      :loading="loading"
    >
      <!-- new member -->
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="700px">
          <v-card>
            <Member />
          </v-card>
        </v-dialog>

        <!-- Delete -->
        <v-dialog v-model="delDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Delete</span>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card-text>
                <v-container>
                  <v-list>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-action>
                        <v-list-item-title>Username</v-list-item-title>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item>{{ delItem.username }}</v-list-item>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-action>
                        <v-list-item-title>Full name</v-list-item-title>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item>{{ delItem.fullname }}</v-list-item>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-action>
                        <v-list-item-title>email</v-list-item-title>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item>{{ delItem.email }}</v-list-item>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-action>
                        <v-list-item-title>Mobile Number</v-list-item-title>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item>{{ delItem.mobileNumber }}</v-list-item>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                  </v-list>
                </v-container>
              </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-chip :color="'red'" :close="false" @click="onDelete">
                Delete
                <v-avatar>
                  <v-icon size="18"> mdi-checkbox-marked-circle </v-icon>
                </v-avatar>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.actions="{ item }">
        <!-- <v-chip
          :color="'yellow darken-3'"
          :close="false"
          @click="editItem(item)"
        >
          <v-avatar>
            <v-icon size="18"> mdi-account-edit </v-icon>
          </v-avatar>
        </v-chip> -->

        <v-chip :color="'red '" :close="false" @click="iconDelete(item)">
          <v-avatar>
            <v-icon size="18"> mdi-delete </v-icon>
          </v-avatar>
        </v-chip>
      </template>
    </v-data-table>
    <v-alert dense text :type="alertType" :value="alertShow" fat>
      {{ txtalert }}
    </v-alert>
  </v-card>
</template>

<script>
import dataRef from '../model/dataRef.vue'

export default {
  middleware: 'auth',
  data() {
    return {
      alertType: "success",
      alertShow: false,
      txtalert:"",
      valid: false,
      search: '',
      dialog: false,
      amount: null,
      formTitle: 'Top up',
      loading: true,
      headers: [
        {
          text: 'Username',
          align: 'start',
          // filterable: false,
          value: 'username',
        },
        {
          text: 'FUll Name',
          value: 'fullname',
        },
        { text: 'Email', value: 'email' },

        { text: 'Mobile', value: 'mobileNumber' },
        { text: 'Register(d/m/y)', value: 'dateTime' },
        {
          text: 'Action',
          value: 'actions',
          align: 'center',
          filterable: false,
        },
      ],
      desserts: [],
      editedItem: {
        name: '',
        email: 0,
        cardId: 0,
        MobileNumber: 0,
        datetime: 0,
      },
      delItem: {
        username: '',
        email: 0,
        MobileNumber: 0,
        fullname: '',
      },
      delDialog: false,
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
    },
    iconDelete(item) {
      this.delDialog = true
      this.delItem = Object.assign(this.delItem, item)
      console.log('onDelete', this.delItem)
    },
    onDelete() {
      this.$axios
        .delete(`${dataRef.host}/api/deleteClient/${this.delItem.username}`)
        .then((res) => {
          console.log('onDelete API', res)
          this.delDialog = false
          this.loading = true
          this.getRefreshData();
          if(res.data.success){
            this.alertType = "success"
            this.txtalert = `Successfully Deleted Username ${this.delItem.username}`
            this.alertShow = true
            this.loading = false
          }
        })
    },
    close() {
      this.dialog = false
      this.delDialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      })
    },
    saveAmount() {
      this.close()
    },
    getRefreshData() {
      this.$axios.get(`${dataRef.host}/api/getMemberSeller`).then((res) => {
        this.desserts = []
        this.desserts = res.data.data
        this.loading = false
      })
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
