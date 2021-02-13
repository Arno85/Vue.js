<template>
  <button @click="login" v-if="!isLoggedIn">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('auth', ['login', 'logout']),
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
};
</script>

<style>
</style>