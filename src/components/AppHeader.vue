<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="">
            <ul class="nav navbar-nav">
                <li class="nav-item" :class="activeClass('/')">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" :class="activeClass('/marvel-heroes')">
                    <router-link class="nav-link" to="/marvel-heroes">Marvel Heroes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/calendar">Calendar</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        activeClass: function(path) {
            return this.$route.path === path ? "active" : "";
        }
    }
};
</script>