<template>
  <h2>
    Page Not Found! Click here to be redirect to
    <router-link :to="routes.teams">Teams</router-link>
  </h2>
</template>

<script>
import routes from '../routing/routes';

export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
</style>