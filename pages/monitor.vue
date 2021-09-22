<template>
  <v-container class="">
    <v-card-text class="text-h5"> Monitor Machine </v-card-text>
    <v-row no-gutters class="" vs-justify="left">
      <v-col v-for="(item, index) in items" :key="index">
        <v-card
          :loading="loading"
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
            <label for="pwd"> Timer: {{ item.timer }} min</label>
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
            <div for="plug1">Port Number: {{ Number(port.portNumber) }}</div>
            <div for="plug1">
              Status:
              {{
                Number(port.stop) - new Date().getTime() > 0
                  ? 'Charging'
                  : 'Ready'
              }}
            </div>

            <div for="plug1">
              Charger on:
              {{
                new Date(Number(port.start)).toLocaleString('TH', {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                })
              }}
              -
              {{
                new Date(Number(port.stop)).toLocaleString('TH', {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                })
              }}
            </div>
            <div for="plug1">
              Stop charger in:
              {{
                Number(port.stop) - now > 0
                  ? timer(
                      Number(port.start),
                      Number(port.stop),
                      item._id,
                      port.portNumber
                    )
                  : '0'
              }}
              minute

              <br />
            </div>
            <!-- <div>
              used:
              {{
                (now - Number(port.start)) / (1000 * 60) < Number(item.timer)
                  ? ((now - Number(port.start)) / 1000 / 60).toFixed(2)
                  : '0'
              }}
              minute
            </div> -->
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
      myInterval: 0,
      ctr: 0,
      timeuse: 0,
      now: 0,
      sec: 0,
      startTime: 0,
      loading: true,
      reload: 0,
    }
  },
  methods: {
    updateTimer() {
      this.myInterval = setInterval(() => {
        console.log('updateTimer')
        this.now = new Date().getTime()
      }, 1000)
    },
    calTimer() {
      this.reload = setInterval(() => {
        console.log('Reload')
        this.$axios.get(`${dataRef.host}/api/AllMachine`).then((res) => {
          this.items = res.data.data
          this.now = res.data.now
        })
      }, 1000 * 60)
    },
    timer(start, stop, name, port) {
      let over = 0
      let now = new Date(this.now).getTime()
      let current = (stop - now) / 1000
      let min = ~~((current % 3600) / 60)
      let sec = ~~current % 60
      let result = `${min.toString().length > 1 ? min : '0' + min}:${sec.toString().length > 1 ? sec : '0' + sec}`
      console.log(
        `Name ${name} port ${port} current ${current} min ${min} sec ${sec}`
      )
      return result
    },
  },
  computed: {
    updateTimeBalance() {
      return this.now
    },
  },
  mounted() {
    this.$axios.get(`${dataRef.host}/api/AllMachine`).then((res) => {
      this.items = res.data.data
      this.now = res.data.now
      this.loading = false
      console.log(res.data.data)
    })
  },
  beforeDestroy() {
    clearInterval(this.myInterval)
    clearInterval(this.reload)
  },
  created() {
    this.updateTimer()
    this.calTimer()
  },
}
</script>