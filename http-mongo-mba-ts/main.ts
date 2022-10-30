import { createMongodbApp } from "@istanbul/mongodb";
import { App, createApp } from "@istanbul/app";
import { createHttpServer } from "@istanbul/http";
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
