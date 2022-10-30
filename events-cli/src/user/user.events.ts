import { createEvent } from "@istanbul/events";
import { User } from "./user.entity";

export const onUserCreatedEvent = createEvent<User>("onUserCreatedEvent");
