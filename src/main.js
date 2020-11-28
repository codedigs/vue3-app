import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from './App.vue';

import router from "./router.js";

var app = createApp(App);
app.use(router);
app.mount('#app');