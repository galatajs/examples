import { User } from "../user/user.entity";

export const logUserCreatedEvent = (user: User): void => {
  console.log(`User created: ${user.name} (${user.uuid})`);
};
