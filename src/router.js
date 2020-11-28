import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import MarvelHeroes from "./pages/MarvelHeroes";
import Calendar from "./pages/Calendar";

var routes = [
    {path: "/", component: Home},
    {path: "/marvel-heroes", component: MarvelHeroes},
    {path: "/calendar", component: Calendar},
];

var router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;