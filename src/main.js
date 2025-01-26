import { registerPlugins } from "@/plugins";

import App from "./App.vue";

import { createApp } from "vue";
import router from "./router";

const app = createApp(App);

const componentFiles = import.meta.glob("./components/*.vue");

for (const [path, component] of Object.entries(componentFiles)) {
  const componentName = path
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  app.component(componentName, component);
}

app.use(router);

registerPlugins(app);

app.mount("#app");
