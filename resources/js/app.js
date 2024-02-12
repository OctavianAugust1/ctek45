import { createApp } from "vue";
import app from "@/src/App.vue";
import Router from "@/src/router/router.js";

// import 'clockwork-browser/toolbar'
// import 'clockwork-browser/metrics'
import axios from 'axios';
import VueLazyload from "vue-lazyload";
window.axios = axios;

createApp(app)
    .use(Router)
    .use(VueLazyload)
    .mount('#app');
