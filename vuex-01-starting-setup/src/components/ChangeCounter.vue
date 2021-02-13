<template>
  <button @click="inct">Add 1</button>
  <button @click="ince(11)">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']),
    ...mapActions({
      inct: 'counter/increment',
      ince: 'counter/increase',
    }),
  },
};
</script>

<style>
</style>