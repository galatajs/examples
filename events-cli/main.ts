import { listen } from "./src/logger/logger.event-service";
import { createStream } from "./src/stream";

const run = () => {
  console.log(`App started`);
  listen();
  createStream();
};

run();
