import { createApp } from "@istanbul/app";
import { createMongodbApp } from "@istanbul/mongodb";
import { mainModule } from "./modules/main.module";

const app = createApp(mainModule);
app.register(
  createMongodbApp({
    url: "mongodb://localhost:27017/istanbul-mongo-cli",
  })
);

console.log("Starting app...");
app.start();
