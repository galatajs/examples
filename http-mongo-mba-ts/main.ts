import { createMongodbApp } from "@galatajs/mongodb";
import { App, createApp } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { mainModule } from "./src/modules/main.module";

const app: App = createApp(mainModule);
const server = createHttpServer();
app.register(
  createMongodbApp({
    url: "mongodb://localhost:27017/istanbul-mongo-blogs",
  })
);
app.register(server);

app.start().then(() => {
  console.log(
    `Server started on http://${server.config.host}:${server.config.port}`
  );
});
