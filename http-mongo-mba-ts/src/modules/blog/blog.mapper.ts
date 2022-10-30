import { Mapper } from "../../common/mapper/object-id.mapper";
import { BlogDocument, BlogModel, BlogSchema } from "./blog.entity";

export class BlogMapper implements Mapper<BlogDocument, BlogModel> {
  map = (input: BlogDocument): BlogModel => {
    return {
      title: input.title,
      id: input._id.toHexString(),
    };
  };
  mapArr = (input: BlogDocument[]): BlogModel[] => {
    return input.map(this.map);
  };
}
