<template>
  <h1 v-text="title"></h1>
  <p>Count: {{ charCount }}</p>
  <ul>
    <li v-for="(ch, index) in characters" v-bind:key="ch.id">
      {{ index+1 }}. {{ ch.name }} <button @click="removeCharacter(index)">X</button>
    </li>
  </ul>

  <form @submit.prevent>
    <input type="text" v-model="newCharacter">
    <button @click="addCharacter">Add</button>
  </form>
</template>

<script>
  export default {
    computed: {
      charCount: function() {
        return this.characters.length;
      }
    },

    methods: {
      addCharacter: function() {
        this.characters.unshift({name: this.newCharacter});
        this.newCharacter = "";
      },

      removeCharacter: function(index) {
        this.characters.splice(index, 1);
      }
    },

    data: function() {
      return {
        title: "Marvel Characters",
        characters: [
          {id: 1, name: "Spider Man"},
          {id: 2, name: "Iron Man"},
          {id: 3, name: "Doctor Strange"},
          {id: 4, name: "War Machine"},
          {id: 5, name: "Gamora"}
        ],
        newCharacter: ""
      }
    }
  };
</script>