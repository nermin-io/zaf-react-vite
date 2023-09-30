import { User, Errors, Ticket } from "./types.ts";
import { zafClient } from "./zafClient.ts";

export const getCurrentUser = (): Promise<{
  errors: Errors<unknown>;
  currentUser: User;
}> => {
  return zafClient.get("currentUser");
};

export const getTicket = (): Promise<{
  errors: Errors<unknown>;
  ticket: Ticket;
}> => {
  return zafClient.get("ticket");
};
