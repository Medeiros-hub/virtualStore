<!-- CartView.vue -->
<template>
  <div class="produtos-carrinho pt-64 pb-32">
    <div class="container">
      <h3>Carrinho de Compras</h3>
      <div class="lista-produtos-carrinho mt-32">
        <div
          class="produto-carrinho display-flex justify-content-space-between align-items-center gap-16 pb-24"
          v-for="product in cartProducts"
          :key="product.id"
        >
          <div class="detalhes display-flex align-items-center gap-16">
            <figure>
              <img 
                :src="product.images" 
                alt="Categoria X"
                width="232"
                height="300"
              >
            </figure>
            <article>
              <p class="nome-produto">{{ product.title }}</p>
              <p class="categoria">{{ product.category.name }}</p>
              <p class="preco">R$ {{ product.price }}</p>
            </article>
          </div>
          <button @click="removeFromCart(product.id)">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
            </svg>
            Remover do carrinho
          </button>
        </div>
        <p class="total" v-if="products.length > 0">Total: R$ {{ calculateTotal() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  computed: {
    cartProducts() {
      return this.$store.state.cart.map(cartItemId => {
        return this.$store.state.products.find(product => product.id === cartItemId);
      });
    },
  },
  mounted() {
    this.requestProductsAPI();
  },
  methods: {
    async requestProductsAPI() {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        this.products = data.filter(product => [15, 16, 17, 19, 23, 24, 25, 26].includes(product.id));
      } catch (error) {
        console.error('Ocorreu um erro: ', error);
      }
    },
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    },
    calculateTotal() {
      return this.cartProducts.reduce((total, product) => {
        if (product && product.price) {
          return total + product.price;
        }
        return total;
      }, 0).toFixed(2);
    },
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
