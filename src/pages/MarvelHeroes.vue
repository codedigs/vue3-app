<template>
    <h1 class="page-header" v-text="title"></h1>
    <p>Count: {{ charCount }}</p>
    <ul>
        <li v-for="(ch, index) in characters" v-bind:key="ch.id">
            {{ index+1 }}. {{ ch.name }} <button class="btn btn-danger btn-sm" @click="characters.splice(index, 1)">delete</button>
        </li>
    </ul>
    <form @submit.prevent="addCharacter">
        <input type="text" v-model="newCharacter">
        <button type="submit" class="btn btn-secondary btn-sm">Add</button>
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
            if (this.newCharacter !== "") {
                this.characters.unshift({ name: this.newCharacter });
                this.newCharacter = "";
            }
        }
    },

    data: function() {
        return {
            title: "Marvel Heroes",
            characters: [
                { id: 1, name: "Spider Man" },
                { id: 2, name: "Iron Man" },
                { id: 3, name: "Doctor Strange" },
                { id: 4, name: "War Machine" },
                { id: 5, name: "Gamora" }
            ],
            newCharacter: ""
        }
    }
};
</script>