<template>
  <v-container class="">
    <v-card-text class="text-h5"> Monitor Machine </v-card-text>
    <v-row no-gutters class="" vs-justify="left">
      <v-col v-for="(item, index) in items" :key="index">
        <v-card
          class="mx-auto pa-5 mb-2 mt-2 mr-2"
          max-width="100%"
          id=""
          variant="outlined"
        >
          <v-col cols="12" sm="12">
            <v-toolbar-title class="text-h5 pl-0">
              {{ item._id }}
              <!-- <v-icon>mdi-account-plus</v-icon> -->
            </v-toolbar-title>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="pwd"> Timer: {{ item.Timer }} min</label>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="pwd"> Amount Per: {{ item.amountPer }} coin</label>
          </v-col>

          <v-col cols="12" sm="12">
            <label for="pwd"> Register Date {{ item.DateTime }}</label>
          </v-col>

          <v-col
            cols="12"
            sm="12"
            v-for="port in item.portStatus"
            :key="port.portNumber"
          >
            <div for="plug1">
              Port Number: {{ Number(port.portNumber) + 1 }}
            </div>
            <div for="plug1" v-if="port.status">Status: Charging</div>
            <div for="plug1" v-else>Status: Ready</div>

            <div for="plug1">Start: {{ new Date(Number(port.start)).toLocaleString('TH', {hour: 'numeric', minute: 'numeric', second: 'numeric', }) }}</div>
            <div for="plug1">Stop: {{ new Date(Number(port.stop)).toLocaleString('TH',{hour: 'numeric', minute: 'numeric', second: 'numeric', }) }}</div>
            <!-- <div for="plug1">Finish in: {{ new Date(Number(port.stop)).toLocaleString('TH',{hour: 'numeric', minute: 'numeric', second: 'numeric', }) }}</div> -->  
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataRef from '../model/dataRef.vue'

export default {
  // middleware: 'auth',
  data() {
    return {
      items: [],
      timerDown: 0,
      seconds: 0,
      myInterval:0,
      ctr:0,
      timeuse:0,
    }
  },
  methods: {
    
    updateTimer() {
      const d = new Date();
      d.toTimeString()
          clearInterval(this.myInterval)
          this.myInterval = setInterval(()=>{
                console.log('tick...')
                this.ctr = this.ctr + 1
          }, 1000)
      }
  },
  computed: {
    myVal() {
        let self = this;
        if (this.myInterval === 0) {
            // start the interval timer
            this.updateTimer()
        }
        return this.ctr
      }
  },
  mounted() {
    this.$axios.get(`${dataRef.host}/api/AllMachine`).then((res) => {
      this.items = res.data.data
      console.log(res.data.data)
    })
  },

  watch: {
  
  },
}
</script>