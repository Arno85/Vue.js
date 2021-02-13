<template>
  <button @click="seeTeams">See Teams</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem';
import routes from '../routing/routes';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  inject: ['users'],
  methods: {
    seeTeams() {
      this.$router.push(routes.teams);
      // this.$router.back()
      // this.$router.forward()
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('-- In component: beforeRouteEnter --');
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('-- In component: beforeRouteLeave --');
    console.log(to);
    console.log(from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantToLeave = confirm('Are you sure?');
      next(userWantToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>