import { Blog } from "./blog.entity";

export class BlogRepository {
  private blogs: Blog[] = [];

  createBlog = (title: string): Blog => {
    const id = this.blogs.length + 1;
    const blog = new Blog(title, id);
    this.blogs.push(blog);
    return blog;
  };

  getBlogs = (): Blog[] => {
    return this.blogs;
  };

  getBlog = (id: number): Blog | undefined => {
    return this.blogs.find((blog) => blog.id === id);
  };
}
