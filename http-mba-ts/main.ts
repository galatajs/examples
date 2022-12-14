import { App, createApp } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { mainModule } from "./modules/main.module";

const app: App = createApp(mainModule);
const server = createHttpServer();
app.register(server);

app.start().then(() => {
  console.log(
    `Server started on http://${server.config.host}:${server.config.port}`
  );
});
