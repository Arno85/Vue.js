<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['id'],
  inject: ['users', 'teams'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMember(id) {
      const selectedTeam = this.teams.find((t) => t.id === id);

      if (selectedTeam) {
        this.teamName = selectedTeam.name;
        this.members = this.users.filter((u) =>
          selectedTeam.members.includes(u.id)
        );
      }
    },
  },
  created() {
    this.loadTeamMember(this.id);
    console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('-- In component: beforeRouteUpdate --');
    console.log(to);
    console.log(from);
    next();
  },
  watch: {
    id(newId) {
      this.loadTeamMember(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>