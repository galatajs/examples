import { createModule, Module } from "@istanbul/app";
import { registerCollection } from "@istanbul/mongodb";
import { BlogMapper } from "./blog.mapper";
import { BlogRepository } from "./blog.repository";
import { BlogRouter } from "./blog.router";
import { BlogService } from "./blog.service";

export const blogModule: Module = createModule("blog", {
  imports: [registerCollection("blogs")],
  providers: [BlogRepository, BlogMapper, BlogService, BlogRouter],
});
