import { App, createApp } from "@istanbul/app";
import { createHttpServer } from "@istanbul/http";
import { mainModule } from "./modules/main.module";

const app: App = createApp(mainModule);
const server = createHttpServer();
app.register(server);

app.start().then(() => {
  console.log(
    `Server started on http://${server.config.host}:${server.config.port}`
  );
});
