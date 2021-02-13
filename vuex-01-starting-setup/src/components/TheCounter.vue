<template>
  <h3>{{ finalCounter }}</h3>
  <p>Authenticated : {{ testAuth }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    /*counter() {
      return this.$store.getters.finalCounter;
    },*/
    ...mapGetters('counter', ['finalCounter', 'testAuth']),
  },
};
</script>

<style>
</style>