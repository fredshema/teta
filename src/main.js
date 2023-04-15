import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./styles/main.scss";

const app = createApp(App);

app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(VueAxios, axios);
app.use(router);
app.use(store);

app.mount("#app");
