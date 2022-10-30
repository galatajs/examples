import { OnAppStarted } from "@istanbul/app";
import { createRouter, Request, Response } from "@istanbul/http";
import { BlogModel } from "./blog.entity";
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
    const blogs: BlogModel[] = await this.blogService.getBlogs();
    res.successData<BlogModel[]>("Blogs fetched successfully", blogs);
  };

  getBlog = async (req: Request, res: Response): Promise<void> => {
    const blog: BlogModel | undefined = await this.blogService.getBlog(
      req.params.id
    );
    if (blog) {
      res.successData<BlogModel>("Blog fetched successfully", blog);
    } else {
      res.notFound("Blog not found");
    }
  };

  createBlog = async (req: Request, res: Response): Promise<void> => {
    const blog: BlogModel = await this.blogService.createBlog(req.body.title);
    res.successData<BlogModel>("Blog created successfully", blog);
  };
}
