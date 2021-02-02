const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.dir(this.$refs.inputText);
      this.message = this.$refs.inputText.value;
    },
  },
  // Lifecycle Hooks
  beforeCreate() {
    console.log('before create');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('before unmount');
  },
  unmounted() {
    console.log('unmounted');
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount();

}, 3000)
