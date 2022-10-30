import { userModule } from "./user/user.module";
import { createModule, Module } from "@istanbul/app";
import { cliModule } from "./cli/cli.module";

export const mainModule: Module = createModule("main", {
  imports: [userModule, cliModule],
});
