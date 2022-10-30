import { User } from "./user.entity";
import { onUserCreatedEvent } from "./user.events";

export const createUser = (username: string): void => {
  const user = new User(
    username,
    Math.trunc(Math.random() * 1000000).toString()
  );
  onUserCreatedEvent.publish(user);
};
