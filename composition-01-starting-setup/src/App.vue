<template>
  <section class="container">
    <user-data
      :firstName="user.firstName"
      :lastName="user.lastName"
    ></user-data>
    <button @click="setAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="user.firstName" />
      <input type="text" placeholder="Last Name" v-model="user.lastName" />
    </div>
  </section>
</template>

<script>
import {
  ref,
  reactive,
  isRef,
  isReactive,
  toRefs,
  computed,
  watch,
  provide,
} from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    // --- data() can be replaced by ref and reactive ---
    // reactive for object
    // ref for everything else (accessible with myRef.value)
    const age = ref(31);
    const user = reactive({
      firstName: '',
      lastName: '',
      age: 35,
    });

    console.log(isRef(age.value));
    console.log(isReactive(user.firstName));

    console.log(isRef(age));
    console.log(isReactive(user));

    const userRefs = toRefs(user);
    console.log(isRef(userRefs.firstName));

    setTimeout(() => {
      user.name = 'Max';
      user.age = 30;
    }, 2000);

    // --- methods can be declared directly in the setup method ---
    const setAge = () => {
      user.age = 40;
      age.value = 40;
    };

    // --- computed methods can be declared with the computed helper ---
    // !!! computed methods are readonly
    const fullName = computed(() => {
      return user.firstName + ' ' + user.lastName;
    });

    // --- watchers can be declared with the watch helper ---
    watch(fullName, (newVal, oldVal) => {
      console.log('--------------------------------');
      console.log('watch fullname oldVal: ', oldVal);
      console.log('watch fullname newVal: ', newVal);
    });

    // --- providers can be declared with the provide helper ---
    provide('user', user);

    return {
      user,
      userName: userRefs.name,
      setAge,
      fullName,
    };
  },
  // data() {
  //   return {
  //     firstName: '',
  //     lastName: '',
  //     age: 31,
  //   };
  // },
  // methods: {
  //    setAge() {
  //     this.age = 32;
  //   }
  // },
  // computed: {
  //   fullName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // },
  // watch: {
  //   fullName(newVal, oldVal) {
  //     console.log('--------------------------------');
  //     console.log('watch fullname oldVal: ', oldVal);
  //     console.log('watch fullname newVal: ', newVal);
  //   }
  // },
  // provide() {
  //   return {age: this.age }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>