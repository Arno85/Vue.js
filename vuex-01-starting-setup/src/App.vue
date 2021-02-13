<template>
  <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addTen">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addTen() {
      this.$store.dispatch('counter/increase', 10);

      // Second syntax allowed
      // this.$store.dispatch({
      //   type: 'increase',
      //   value: 10,
      // });
    },
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>