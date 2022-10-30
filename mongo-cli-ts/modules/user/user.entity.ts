import { Document } from "mongodb";

export interface User {
  name: string;
}

export interface UserSchema extends Document, User {}
export interface UserModel extends User {
  id: string;
}
