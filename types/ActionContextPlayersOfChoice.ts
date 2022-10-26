import { globalCache } from "../components/CauldronApi";
import { ActionContextPlayersOfChoiceType } from "./CardMetaData";

export type ActionContextPlayersOfChoice = {
  actionName: string;
  type: ActionContextPlayersOfChoiceType["code"];
};

export const actionContextPlayersOfChoiceEmpty = (): ActionContextPlayersOfChoice => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextPlayersOfChoiceTypes[0].code,
  };
};
