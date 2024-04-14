import "./assets/main.css";

import { createApp } from "vue";
import { IonicVue } from "@ionic/vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
const app = createApp(App);
app.use(autoAnimatePlugin).use(IonicVue);
app.mount("#app");
