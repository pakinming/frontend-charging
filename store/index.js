import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        host: `https://ws-charging.herokuapp.com`,
        host1: 'http://localhost:8000',
        oauth: ''
    },
    mutations: {
        getHost() {
            console.log(state);
            return state.host;
        }
    }
})