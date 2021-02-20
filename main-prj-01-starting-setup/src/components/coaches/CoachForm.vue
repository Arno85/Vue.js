<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">Firstname</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.value"
        @blur="isEmptyStringValidator('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Lastname</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.value"
        @blur="isEmptyStringValidator('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.value"
        @blur="isEmptyStringValidator('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Rate</label>
      <input
        type="number"
        min="1"
        id="rate"
        v-model.number="rate.value"
        @blur="isPositiveNumberValidator('rate')"
      />
      <p v-if="!rate.isValid">Rate must be greater than 0!</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <label>Areas of Expertise</label>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.value"
          @blur="isEmptyArrayValidator('areas')"
        />
        <span for="frontend">Frontend development</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.value"
          @blur="isEmptyArrayValidator('areas')"
        />
        <span for="backend">Backend development</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.value"
          @blur="isEmptyArrayValidator('areas')"
        />
        <span for="career">Career advisory</span>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected!</p>
    </div>
    <div :class="{ invalid: !formIsValid }" v-if="!formIsValid">
      <h3>Please fix the above errors and submit again.</h3>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  emits: ['save-data'],
  methods: {
    isEmptyStringValidator(input) {
      if (!this[input].value) {
        return (this[input].isValid = false);
      }
      return (this[input].isValid = true);
    },
    isPositiveNumberValidator(input) {
      if (!this[input].value || this[input].value < 0) {
        return (this[input].isValid = false);
      }
      return (this[input].isValid = true);
    },
    isEmptyArrayValidator(input) {
      if (this[input].value.length === 0) {
        return (this[input].isValid = false);
      }
      return (this[input].isValid = true);
    },
    validateForm() {
      this.formIsValid = true;
      const firstValid = this.isEmptyStringValidator('firstName');
      const lastValid = this.isEmptyStringValidator('lastName');
      const descValid = this.isEmptyStringValidator('description');
      const rateValid = this.isPositiveNumberValidator('rate');
      const areasValid = this.isEmptyArrayValidator('areas');

      if (
        !firstValid ||
        !lastValid ||
        !descValid ||
        !rateValid ||
        !areasValid
      ) {
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
  transform: scale(1.5);
  margin-top: 10px;
}

span {
  margin-left: 5px;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid p,
.invalid span,
.invalid h3 {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>