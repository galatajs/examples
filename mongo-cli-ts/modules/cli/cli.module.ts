import { createModule, Module } from "@galatajs/app";
import { userModule } from "../user/user.module";
import { CliService } from "./cli.service";

export const cliModule: Module = createModule("cli", {
  imports: [userModule],
  providers: [CliService],
});
