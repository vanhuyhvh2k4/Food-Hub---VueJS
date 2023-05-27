import { createStore } from 'vuex'

const store = createStore({
  state: {
    currentUser: null,
    numberOfCart: null,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser
    },
    setNumberOfCart(state, numberOfCart) {
      state.numberOfCart = numberOfCart
    }
  },
//   actions: {
//     async getUser({ commit }, accessToken) {
//       try {
//         const response = await axiosJWT.get('http://localhost:3000/v1/api/home/getUser', {
//           headers: {
//             token: `Bearer ${accessToken}`
//           }
//         })
//         const currentUser = response.data.data.currentUser
//         commit('setCurrentUser', currentUser)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   },
  plugins: [
    (store) => {
      // Load state from local storage on app start
      const currentUser = localStorage.getItem('currentUser');
      const numberOfCart = localStorage.getItem('numberOfCart');
      if (currentUser) {
        store.commit('setCurrentUser', JSON.parse(currentUser))
      }
      if (numberOfCart) {
        store.commit('setNumberOfCart', JSON.parse(numberOfCart))
      }

      // Save state to local storage on state change
      store.subscribe((mutation, state) => {
        if (mutation.type === 'setCurrentUser') {
          localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
        }
        if (mutation.type === 'setNumberOfCart') {
          localStorage.setItem('numberOfCart', JSON.stringify(state.numberOfCart))
        }
      })
    }
  ]
})

export default store