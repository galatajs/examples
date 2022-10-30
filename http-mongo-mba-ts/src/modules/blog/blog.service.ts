import { BlogDocument, BlogModel } from "./blog.entity";
import { BlogMapper } from "./blog.mapper";
import { BlogRepository } from "./blog.repository";

export class BlogService {
  private blogRepository: BlogRepository;
  private blogMapper: BlogMapper;

  constructor(params: {
    blogRepository: BlogRepository;
    blogMapper: BlogMapper;
  }) {
    this.blogRepository = params.blogRepository;
    this.blogMapper = params.blogMapper;
  }

  createBlog = async (title: string): Promise<BlogModel> => {
    const blog: BlogModel = await this.blogRepository.createBlog(title);
    return blog;
  };

  getBlogs = async (): Promise<BlogModel[]> => {
    const blogs: BlogDocument[] = await this.blogRepository.getBlogs();
    return this.blogMapper.mapArr(blogs);
  };

  getBlog = async (id: string): Promise<BlogModel | undefined> => {
    const blog: BlogDocument | undefined = await this.blogRepository.getBlog(
      id
    );
    if (!blog) return undefined;
    return this.blogMapper.map(blog);
  };
}
