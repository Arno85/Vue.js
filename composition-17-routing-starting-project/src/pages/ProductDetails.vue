<template>
  <section>
    <h2>{{ product.title }}</h2>
    <h3>${{ product.price }}</h3>
    <p>{{ product.description }}</p>
    <router-link to="/products/p2">Product2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup(props) {
    const products = inject('products');

    console.log(useRoute());

    const product = computed(() =>
      products.value.find((p) => p.id === props.pid)
    );

    return { product };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>