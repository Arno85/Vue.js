<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goal.isVisible">{{ goal.title }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    // ---- Separate refs
    const title = ref('Learning Vue!');
    const isVisible = ref(true);

    // ---- Ref object
    const goalRefObj = ref({
      title: 'Learning Vue!',
      isVisible: true,
    });

    // ---- Reactive object
    const goalReactObj = reactive({
      title: 'Learning Vue!',
      isVisible: true,
    });

    const toggleGoal = () => {
      // ---- Separate refs
      isVisible.value = !isVisible.value;

      // ---- Ref object
      goalRefObj.value.isVisible = !goalRefObj.value.isVisible;

      // ---- Reactive object
      goalReactObj.isVisible = !goalReactObj.isVisible;
    };

    return {
      // ---- Separate refs
      title,
      isVisible,

      // ---- Ref object
      // goal: goalRefObj,

      // ---- Reactive object
      goal: goalReactObj,
      toggleGoal,
    };
  },
  // data() {
  //   return {
  //     goal: {
  //       title: 'Learning Vue!',
  //       isVisible: true,
  //     },
  //   };
  // },
  // methods: {
  //   toggleGoal() {
  //     this.goal.isVisible = !this.goal.isVisible;
  //   },
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>