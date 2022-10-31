import { createModule, Module } from "@galatajs/app";
import { BlogRepository } from "./blog.repository";
import { BlogRouter } from "./blog.router";
import { BlogService } from "./blog.service";

export const blogModule: Module = createModule("blog", {
  providers: [BlogRepository, BlogService, BlogRouter],
});
