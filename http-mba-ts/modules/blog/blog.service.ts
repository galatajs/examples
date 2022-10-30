import { Blog } from "./blog.entity";
import { BlogRepository } from "./blog.repository";

export class BlogService {
  private blogRepository: BlogRepository;

  constructor(params: { blogRepository: BlogRepository }) {
    this.blogRepository = params.blogRepository;
  }

  createBlog = (title: string): Blog => {
    const blog: Blog = this.blogRepository.createBlog(title);
    return blog;
  };

  getBlogs = (): Blog[] => {
    return this.blogRepository.getBlogs();
  };

  getBlog = (id: number): Blog | undefined => {
    return this.blogRepository.getBlog(id);
  };
}
