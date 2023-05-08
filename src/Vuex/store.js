// store.js
import {createStore} from 'vuex';
import axiosJWT from '@/utils/refreshToken'

const store = createStore({
  state () {
    return {
      currentUser: null
    }
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser
    }
  },
  actions: {
    async getUser({ commit }, accessToken) {
      try {
        const response = await axiosJWT.get('http://localhost:3000/v1/api/home/getUser', {
          headers: {
            token: `Bearer ${accessToken}`
          }
        })
        const currentUser = response.data.data.currentUser
        commit('setCurrentUser', currentUser)
      } catch (error) {
          console.log(error);
        }
    }
  }  
})

export default store;