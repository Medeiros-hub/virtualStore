import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
    products: [],
  },
  mutations: {
    addToCart(state, productId) {
      state.cart.push(productId);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(id => id !== productId);
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
});

export default store;

