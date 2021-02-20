<template>
  <div>
    <base-dialog :show="!!error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <contact-form @save-data="saveData"></contact-form>
  </div>
</template>

<script>
import ContactForm from '../../components/coaches/ContactForm.vue';

export default {
  data() {
    return {
      error: null,
    };
  },
  components: { ContactForm },
  methods: {
    async saveData(data) {
      try {
        await this.$store.dispatch('requests/addRequest', data);
        this.$router.replace('/coaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style>
</style>