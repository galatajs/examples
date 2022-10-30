import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { createUser } from "./user/user.service";

const writeLabel = (): void => {
  console.log("Enter a username:");
};

export const createStream = async () => {
  const rl = readline.createInterface({ input, output });

  writeLabel();
  rl.on("line", (line) => {
    createUser(line);
    writeLabel();
  });
};
