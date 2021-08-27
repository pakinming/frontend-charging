<template>
  <v-container class="">
    <v-card-text class="text-h5"> Monitor Machine </v-card-text>
    <v-row no-gutters class="" vs-justify="left">
      <v-col>
        <v-card
          class="mx-auto pa-5 mb-2 mt-2 mr-2"
          max-width="100%"
          id=""
          variant="outlined"
        >
          <v-col cols="12" sm="12">
            <v-toolbar-title class="text-h5 white--text pl-0">
              Machine 1
              <!-- <v-icon>mdi-account-plus</v-icon> -->
            </v-toolbar-title>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="pwd"> Status</label>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="plug1">Plug 1 Ready</label>
          </v-col>
          <v-col cols="12" sm="12">
            <label for="plug2">Plug 2 Charing by Udom</label>
          </v-col>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto pa-5 mb-2 mt-2 mr-2"
          max-width="100%"
          id=""
          variant="outlined"
        >
          <v-col cols="12" sm="12">
            <v-toolbar-title class="text-h5 white--text pl-0">
              Machine 1
              <!-- <v-icon>mdi-account-plus</v-icon> -->
            </v-toolbar-title>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="pwd"> Status</label>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="plug1">Plug 1 Ready</label>
          </v-col>
          <v-col cols="12" sm="12">
            <label for="plug2">Plug 2 Charing by Udom</label>
          </v-col>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto pa-5 mb-2 mt-2"
          max-width="100%"
          id=""
          variant="outlined"
        >
          <v-col cols="12" sm="12">
            <v-toolbar-title class="text-h5 white--text pl-0">
              Machine 1
              <!-- <v-icon>mdi-account-plus</v-icon> -->
            </v-toolbar-title>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="pwd"> Status</label>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="plug1">Plug 1 Ready</label>
          </v-col>
          <v-col cols="12" sm="12">
            <label for="plug2">Plug 2 Charing by Udom</label>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>