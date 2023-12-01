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
export default {
  name: 'ProductsComponent',
  data() {
    return {
      products: [],
      cart: [], // Array para armazenar os produtos no carrinho
    };
  },
  mounted() {
    this.requestProductsAPI();
  },
  methods: {
    async requestProductsAPI() {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        return this.products = data.filter(product => [15, 16, 17, 19, 23, 24, 25, 26].includes(product.id));
      } catch (error) {
        console.error('Ocorreu um erro: ', error);
      }
    },
    isProductInCart(productId) {
      return this.cart.includes(productId);
    },
    toggleCart(product) {
      const productId = product.id;
      if (this.isProductInCart(productId)) {
        this.cart = this.cart.filter(id => id !== productId);
      } else {
        this.cart.push(productId);
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