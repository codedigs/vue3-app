<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="">
            <ul class="nav navbar-nav">
                <li class="nav-item" v-for="link in links" :key="link.to" :class="activeClass(link.to)">
                    <router-link class="nav-link" :to="link.to" v-text="link.name"></router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data: function() {
        return {
            links: [
                {to: "/", name:"Home"},
                {to: "/marvel-heroes", name:"Marvel Heroes"},
                {to: "/calendar", name:"Calendar"},
                {to: "/markdown", name:"Markdown"},
                {to: "/slider-carousel", name:"Slider Carousel"},
            ]
        }
    },

    methods: {
        activeClass: function(path) {
            return this.$route.path === path ? "active" : "";
        }
    }
};
</script>