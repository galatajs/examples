import { createModule, Module } from "@istanbul/app";
import { registerCollection } from "@istanbul/mongodb";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

export const userModule: Module = createModule("user", {
  imports: [registerCollection("users")],
  providers: [UserRepository, UserService],
  exports: [UserService],
});
