import { Collection } from "mongodb";
import { User, UserModel } from "./user.entity";

export class UserRepository {
  private usersCollection: Collection<User>;

  constructor(params: { usersCollection: Collection<User> }) {
    this.usersCollection = params.usersCollection;
  }

  create = async (name: string): Promise<UserModel> => {
    const user = { name };
    const result = await this.usersCollection.insertOne(user);
    return {
      ...user,
      id: result.insertedId.toHexString(),
    };
  };
}
