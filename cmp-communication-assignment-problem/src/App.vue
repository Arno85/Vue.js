<template>
  <user-data @save-user="saveUser"></user-data>
  <active-user :name="name" :age="age"></active-user>
</template>

<script>
import ActiveUser from "./components/ActiveUser";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      name: "",
      age: null,
    };
  },
  methods: {
    saveUser(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>

<style>
</style>