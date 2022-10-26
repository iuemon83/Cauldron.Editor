import { ActionContextPlayersOfChoice } from "./ActionContextPlayersOfChoice";

export type ActionContextPlayers = {
  choice: ActionContextPlayersOfChoice | undefined;
};

export const actionContextPlayersEmpty = (): ActionContextPlayers => {
  return {
    choice: undefined,
  };
};
