import { createStore } from 'vuex'
import axiosJWT from '@/utils/refreshToken'

const store = createStore({
  state: {
    currentUser: null
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
        console.log(error)
      }
    }
  },
  plugins: [
    (store) => {
      // Load state from local storage on app start
      const currentUser = localStorage.getItem('currentUser')
      if (currentUser) {
        store.commit('setCurrentUser', JSON.parse(currentUser))
      }

      // Save state to local storage on state change
      store.subscribe((mutation, state) => {
        if (mutation.type === 'setCurrentUser') {
          localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
        }
      })
    }
  ]
})

export default store