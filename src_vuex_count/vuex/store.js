import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count:0
},

const mutations = {
    increment(state){
        state.count++
      },
    decrement(state){
        state.count--
      }
},

const actions = {
    increment(context){
        context.commit('increment')
    },
    decrement(context){
        context.commit('decrement')
    },
    ifOdd(context){
        if(context.state.count % 2 === 1){
            context.commit('increment')
        }
      },
      async(context){
        setTimeout(() => {
            context.commit('increment')
        }, 1000);
      }
},

const getters = {

},

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})