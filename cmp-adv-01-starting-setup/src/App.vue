<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
  <course-goal>
    <template #default="slotProps">
      <h2>{{ slotProps.goal }}</h2>
    </template>
  </course-goal>
  <course-goal>
    <template #default="slotProps">
      <p>{{ slotProps.goal }}</p>
      <p>{{ slotProps["anotherProp"] }}</p>
    </template>
  </course-goal>

  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goal')">Manage Goal</button>
  <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
  <manage-goal v-if="selectedComponent === 'manage-goal'"></manage-goal> -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoals from "./components/ActiveGoals";
import ManageGoal from "./components/ManageGoal";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal,
    ActiveGoals,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>