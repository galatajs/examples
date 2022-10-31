import { OnAppStarted } from "@galatajs/app";
import { UserService } from "../user/user.service";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export class CliService implements OnAppStarted {
  private userService: UserService;

  constructor(params: { userService: UserService }) {
    this.userService = params.userService;
  }

  onAppStarted = (): void => {
    this.createStream();
  };

  private writeLabel = (): void => {
    console.log("Enter a username:");
  };

  createStream = (): void => {
    const rl = readline.createInterface({ input, output });

    this.writeLabel();
    rl.on("line", async (line) => {
      const user = await this.userService.create(line);
      console.log(`Created user ${user.name} with id ${user.id}`);
      this.writeLabel();
    });
  };
}
