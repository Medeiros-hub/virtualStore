<template>
  <CategoriesComponent></CategoriesComponent>
  <ProductsComponent></ProductsComponent>
</template>

<script>
  import CategoriesComponent from '../components/CategoriesComponent.vue';
  import ProductsComponent from '../components/ProductsComponent.vue';

  export default {
    name: 'HomeView',
    components: {
      CategoriesComponent,
      ProductsComponent,
    }
  }
</script>
