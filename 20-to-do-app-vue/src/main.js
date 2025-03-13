import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/toDoStore";
import "../../css/output.css";

createApp(App).use(store).mount("#app");
