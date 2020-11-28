import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import MarvelHeroes from "./pages/MarvelHeroes";

var routes = [
    {path: "/", component: Home},
    {path: "/marvel-heroes", component: MarvelHeroes},
];

var router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;