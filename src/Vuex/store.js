import { createStore } from 'vuex'

const store = createStore({
  state: {
    currentUser: null,
    numberOfCart: null,
    orderId: null,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setNumberOfCart(state, numberOfCart) {
      state.numberOfCart = numberOfCart;
    },
    setOrderId(state, orderId) {
      state.orderId = orderId;
    },
    clearData(state) {
      state.currentUser = null;
      state.numberOfCart = null;
      state.orderId = null;
    }
  },
  actions: {
    logout({commit}) {
      commit('clearData');
    }
  },
  getters: {
    getOrderId(state) {
      return state.orderId;
    }
  },
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