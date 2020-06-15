import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {

  },
  mutations: {
    retrieveToken(context, credentials){
      axios.post('/login', {
        username: credentials.username,
        password: credentials.password,
      })
        .then(response => {
          console.log(response)
        })
    }

  },
  actions: {
  },
  modules: {
  }
})
