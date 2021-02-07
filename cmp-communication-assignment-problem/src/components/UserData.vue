<template>
  <form @submit.prevent="saveUserEmitter">
    <div class="forn-control">
      <label>Name</label>
      <input type="text" ref="name" />
    </div>
    <div class="forn-control">
      <label for="">Age</label>
      <input type="number" ref="age" />
    </div>
    <div class="form-control">
      <button>Save</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["save-user"],
  methods: {
    saveUserEmitter() {
      this.$emit("save-user", this.$refs.name.value, +this.$refs.age.value);
    },
  },
};
</script>

<style>
</style>