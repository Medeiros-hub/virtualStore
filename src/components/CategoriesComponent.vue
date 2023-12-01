<template>
  <!-- CATEGORIAS -->
  <div class="categorias pt-32 pb-64">
    <div class="container">
      <h3>Categorias</h3>
      <div
        class="display-flex gap-8 text-align-center pt-16 pb-16"
        style="flex-wrap: wrap;"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-item"
        >
          <img
            :src="category.image"
            :alt="category.name"
            width="232"
            height="300"
          />
          <router-link :to="'/category/' + category.id">{{ category.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- FIM DAS CATEGORIAS -->
</template>

<script>
export default {
  name: 'CategoriesComponent',
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.requestCategoriesAPI();
  },
  methods: {
    async requestCategoriesAPI() {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
        const data = await response.json();
        
        return this.categories = data.filter(category => [1, 2, 4, 5].includes(category.id));
      } catch (error) {
        console.error('Ocorreu um erro: ', error);
      }
    },
  },
};
</script>

<style scoped>
.category-item {
  display: flex;
  flex-direction: column;
}
</style>
