<template>
  <h2>{{ name }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
export default {
  name: "active-user",
  props: {
    name: String,
    age: Number,
  },
};
</script>

<style>
</style>