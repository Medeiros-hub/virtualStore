<template>
  <!-- PRODUTOS -->
  <div class="produtos pt-32 pb-64">
    <div class="container">
      <h3>Produtos</h3>
      <div class="lista-produtos display-flex align-items-center flex-wrap-wrap gap-16 pt-16">
        <div 
          class="produto"
          v-for="product in products"
          :key="product.id"
        >
          <img 
            :src="product.images" 
            alt="Categoria X"
            width="232"
            height="258"
          >
          <div class="detalhes">
            <p class="nome-produto">{{product.title}}</p>
            <p class="categoria">{{product.category.name}}</p>
            <p class="preco">R$ {{product.price}}</p>
            <button
              class="carrinho"
              :class="{ 'no-carrinho': isProductInCart(product.id) }"
              @click="toggleCart(product)"
            >
              {{ isProductInCart(product.id) ? 'Adicionado' : 'Adicionar ao Carrinho' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div><!-- FIM DOS PRODUTOS -->
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ProductsComponent',
  computed: {
    ...mapState(['cart']),
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.requestProductsAPI();
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart']),
    async requestProductsAPI() {
      alert("Por favor adicionar 1 item de cada vez ao carrinho")
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        this.products = data.filter(product => [15, 16, 17, 19, 23, 24, 25, 26].includes(product.id));
      } catch (error) {
        console.error('Ocorreu um erro: ', error);
      }
    },
    isProductInCart(productId) {
      return this.cart.some(item => item === productId);
    },
    toggleCart(product) {
      const productId = product.id;
      if (this.isProductInCart(productId)) {
        this.removeFromCart(productId);
      } else {
        this.addToCart(productId);
        this.$store.commit('setProducts', [product]); 
      }
    },
  },
};
</script>

<style scoped>
.lista-produtos {
  justify-content: space-between;
}

img {
  height: revert-layer;
}
</style>
