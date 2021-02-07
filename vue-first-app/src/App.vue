<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-friend="addFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        v-bind="friend"
        @toggle-favorite="toggleIsFavorite"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "2",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleIsFavorite(friendId) {
      const friend = this.friends.find((f) => f.id === friendId);
      friend.isFavorite = !friend.isFavorite;
    },
    addFriend(friendToAdd) {
      const newFriend = {
        id: (this.friends.length + 1).toString(),
        name: friendToAdd.name,
        phone: friendToAdd.phone,
        email: friendToAdd.email,
        isFavorite: false,
      };
      this.friends.push(newFriend);
    },
    deleteFriend(friendId) {
      const friendIndex = this.friends.findIndex((f) => f.id === friendId);
      this.friends.splice(friendIndex, 1);
    },
  },
};
</script>