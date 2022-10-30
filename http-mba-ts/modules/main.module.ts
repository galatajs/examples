import { blogModule } from "./blog/blog.module";
import { createModule, Module } from "@istanbul/app";

export const mainModule: Module = createModule("main", {
  imports: [blogModule],
});
