import { Document, ObjectId } from "mongodb";

export interface Blog {
  title: string;
}
export interface BlogSchema extends Document, Blog {}
export interface BlogDocument extends Blog {
  _id: ObjectId;
}
export interface BlogModel extends Blog {
  id: string;
}
