<template>
  <h2>Manage Goal</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <p>Input empty</p>
      <button @click="closeModal">Ok</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;

      if (!enteredValue) {
        this.inputIsInvalid = true;
      }
    },
    closeModal() {
      this.inputIsInvalid = false;
    },
  },
};
</script>