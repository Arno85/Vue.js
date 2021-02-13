<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <div class="container">
    <users-list></users-list>
  </div>

  <div class="container">
    <transition name="block">
      <div class="block" v-if="animatedBlock"></div>
    </transition>
    <button @click="toggleAnimateBlock">Animate</button>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">Paragraphe!</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';

export default {
  components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      usersAreVisible: false,
      paraIsVisible: false,
      paraEnterInterval: null,
      paraLeaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter', el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter', el);
      let round = 1;
      this.paraEnterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;

        if (round > 100) {
          clearInterval(this.paraEnterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('after enter', el);
    },
    beforeLeave(el) {
      console.log('before leave', el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave', el);
      let round = 1;
      this.paraLeaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;

        if (round > 100) {
          clearInterval(this.paraLeaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('after leave', el);
    },
    enterCancelled() {
      clearInterval(this.paraEnterInterval);
    },
    leaveCancelled() {
      clearInterval(this.paraLeaveInterval);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleAnimateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 1s ease-out;
  transform-origin: center;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.block-enter-from,
.block-leave-to {
  opacity: 0;
  transform: scale(0);
}

.block-enter-active {
  transition: all 0.3s ease-out;
}

.block-leave-active {
  transition: all 0.3s ease-in;
}

.block-enter-to,
.block-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-active {
  animation: slide 0.2s ease-out;
}

.route-leave-active {
  animation: slide 0.2s ease-in reverse;
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>