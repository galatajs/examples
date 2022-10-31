import { createEvent } from "@galatajs/events";
import { User } from "./user.entity";

export const onUserCreatedEvent = createEvent<User>("onUserCreatedEvent");
