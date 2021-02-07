<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource';
import StoredResources from './StoredResources';

export default {
  props: ['resources'],
  components: { AddResource, StoredResources },
  data() {
    return {
      selectedTab: 'add-resource',
      storedResources: [
        {
          id: 'official guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Lear to Google',
          link: 'https://google.ca',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(cmp) {
      this.selectedTab = cmp;
    },
    addResource(enteredRes) {
      const newResource = {
        id: new Date().toISOString(),
        title: enteredRes.title,
        description: enteredRes.description,
        link: enteredRes.link,
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resId) {
      const resIndex = this.storedResources.findIndex((r) => r.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style>
</style>