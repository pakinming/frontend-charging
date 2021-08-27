export const state = () => ({
    counter: 0,
    isLogon:false,
    drawer:false
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    setIslogon(state,val){
      state.isLogon = val
    },
    setDrawer(state, val){
      state.drawer = val
    }
  }
