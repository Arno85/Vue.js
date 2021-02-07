<template>
  <form @submit.prevent="addFriendEmitter">
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div class="form-control">
      <label>Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div class="form-control">
      <label>Email</label>
      <input type="email" v-model="email" />
    </div>
    <div class="form-control">
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  emits: ["add-friend"],
  methods: {
    addFriendEmitter() {
      this.$emit("add-friend", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
    },
  },
};
</script>

<style>
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.form-control {
  margin: 20px 0;
}

label {
  width: 50px;
  float: left;
}

input {
  font-size: 16px;
}
</style>