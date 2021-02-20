<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ coach.hourlyRate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in coach.areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="contactLink">Contact</base-button>
      <base-button link :to="detailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import routes from '../../routing/routes';

export default {
  props: ['coach'],
  computed: {
    contactLink() {
      return `${routes.coaches}/${this.coach.id}/${routes.contact}`;
    },
    detailsLink() {
      return `${routes.coaches}/${this.coach.id}`;
    },
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>