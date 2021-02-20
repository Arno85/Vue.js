<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ coach?.hourlyRate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in coach?.areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ coach?.description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      coach: null,
    };
  },
  computed: {
    contactLink() {
      return `/coaches/${this.id}/contact`;
    },
    fullName() {
      return `${this.coach?.firstName} ${this.coach?.lastName}`;
    },
  },
  created() {
    this.coach = this.$store.getters['coaches/coaches'].find(
      (c) => c.id === this.id
    );

    if (!this.coach) {
      this.$router.replace('/notFound');
    }
  },
};
</script>

<style>
</style>