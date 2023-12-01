<template>
  <HeaderComponent></HeaderComponent>
  <NavigateComponent></NavigateComponent>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import NavigateComponent from '../components/NavigateComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';

  export default {
    name: 'HomeView',
    components: {
      HeaderComponent,
      NavigateComponent,
      FooterComponent
    }
  }
</script>
