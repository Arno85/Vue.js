<template>
  <h2>{{ fullName }}</h2>
  <h3>{{ user.age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  emits: ['test'],
  setup(props, context) {
    console.log(context);

    // Accessing props inside setup methods
    const fullName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    // Accessing emits inside setup methods
    context.emit('test', {});

    // Accessing inject inside setup methods
    const user = inject('user');

    return {
      fullName,
      user,
    };
  },
  // computed: {
  //   fullName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
  // inject: ['age']
};
</script>

<style>
</style>