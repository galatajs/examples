import { Collection, ObjectId } from "mongodb";
import { Blog, BlogDocument, BlogModel } from "./blog.entity";

export class BlogRepository {
  private blogsCollection: Collection<Blog>;

  constructor(params: { blogsCollection: Collection<Blog> }) {
    this.blogsCollection = params.blogsCollection;
  }

  createBlog = async (title: string): Promise<BlogModel> => {
    const blog = { title };
    const result = await this.blogsCollection.insertOne(blog);
    return {
      title: blog.title,
      id: result.insertedId.toHexString(),
    };
  };

  getBlogs = async (): Promise<BlogDocument[]> => {
    return this.blogsCollection.find().toArray();
  };

  getBlog = async (id: string): Promise<BlogDocument | undefined> => {
    const blog = await this.blogsCollection.findOne({ _id: new ObjectId(id) });
    if (!blog) return undefined;
    return blog;
  };
}
