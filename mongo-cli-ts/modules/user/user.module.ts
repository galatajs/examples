import { createModule, Module } from "@galatajs/app";
import { registerCollection } from "@galatajs/mongodb";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

export const userModule: Module = createModule("user", {
  imports: [registerCollection("users")],
  providers: [UserRepository, UserService],
  exports: [UserService],
});
