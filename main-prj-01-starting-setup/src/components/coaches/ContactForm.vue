<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email.value"
        @blur="isEmptyStringValidator('email')"
      />
      <p v-if="!email.isValid">Email must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !message.isValid }">
      <label for="message">Message</label>
      <textarea
        id="message"
        rows="5"
        v-model="message.value"
        @blur="isEmptyStringValidator('message')"
      ></textarea>
      <p v-if="!message.isValid">Message must not be empty!</p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      email: {
        value: '',
        isValid: true,
      },
      message: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    isEmptyStringValidator(input) {
      if (!this[input].value) {
        return (this[input].isValid = false);
      }
      return (this[input].isValid = true);
    },
    validateForm() {
      this.formIsValid = true;
      const emailValid = this.isEmptyStringValidator('email');
      const messageValid = this.isEmptyStringValidator('message');

      if (!emailValid || !messageValid) {
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        coachId: this.$route.params.id,
        email: this.email.value,
        message: this.message.value,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.actions {
  text-align: center;
}
</style>