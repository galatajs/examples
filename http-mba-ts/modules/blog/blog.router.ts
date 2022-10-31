import { OnAppStarted } from "@galatajs/app";
import { createRouter, Request, Response } from "@galatajs/http";
import { Blog } from "./blog.entity";
import { BlogService } from "./blog.service";

export class BlogRouter implements OnAppStarted {
  private blogService: BlogService;

  constructor(params: { blogService: BlogService }) {
    this.blogService = params.blogService;
  }

  onAppStarted = (): void => {
    const router = createRouter({ prefix: "blog" });
    router.get("", this.getBlogs);
    router.get(":id", this.getBlog);
    router.post("", this.createBlog);
  };

  getBlogs = async (req: Request, res: Response): Promise<void> => {
    const blogs: Blog[] = this.blogService.getBlogs();
    res.successData<Blog[]>("Blogs fetched successfully", blogs);
  };

  getBlog = async (req: Request, res: Response): Promise<void> => {
    const blog: Blog | undefined = this.blogService.getBlog(+req.params.id);
    if (blog) {
      res.successData<Blog>("Blog fetched successfully", blog);
    } else {
      res.notFound("Blog not found");
    }
  };

  createBlog = async (req: Request, res: Response): Promise<void> => {
    const blog: Blog = this.blogService.createBlog(req.body.title);
    res.successData<Blog>("Blog created successfully", blog);
  };
}
