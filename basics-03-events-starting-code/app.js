const app = Vue.createApp({
  data() {
    return {
      name: '',
      lastName: '',
      counter: 0,
      confirmedName: '',
      // fullName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    submitForm(event) {
      console.log('sign up');
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullName() {
      console.log('method running...')
      if (!this.name) {
        return;
      }
      return this.name + ' Martin';
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value) {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value) {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      console.log('method running...')
      if (!this.name || !this.lastName) {
        return;
      }
      return this.name + ' ' + this.lastName;
    }
  }
});

app.mount('#events');
