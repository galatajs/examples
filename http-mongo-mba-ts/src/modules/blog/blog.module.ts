import { createModule, Module } from "@galatajs/app";
import { registerCollection } from "@galatajs/mongodb";
import { BlogMapper } from "./blog.mapper";
import { BlogRepository } from "./blog.repository";
import { BlogRouter } from "./blog.router";
import { BlogService } from "./blog.service";

export const blogModule: Module = createModule("blog", {
  imports: [registerCollection("blogs")],
  providers: [BlogRepository, BlogMapper, BlogService, BlogRouter],
});
