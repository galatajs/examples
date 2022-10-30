import { UserModel } from "./user.entity";
import { UserRepository } from "./user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }

  create = async (name: string): Promise<UserModel> => {
    return this.userRepository.create(name);
  };
}
