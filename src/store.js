import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
  },
})

export default store