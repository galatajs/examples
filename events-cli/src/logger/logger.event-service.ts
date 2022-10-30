import { onUserCreatedEvent } from "../user/user.events";
import { logUserCreatedEvent } from "./logger.service";

export const listen = (): void => {
  onUserCreatedEvent.addListener(logUserCreatedEvent);
  console.log("Listening for events...");
};
