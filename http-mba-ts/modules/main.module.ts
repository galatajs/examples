import { blogModule } from "./blog/blog.module";
import { createModule, Module } from "@galatajs/app";

export const mainModule: Module = createModule("main", {
  imports: [blogModule],
});
