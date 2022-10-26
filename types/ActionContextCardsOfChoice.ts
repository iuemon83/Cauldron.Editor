import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfChoiceType } from "./CardMetaData";

export type ActionContextCardsOfChoice = {
  actionName: string;
  type: ActionContextCardsOfChoiceType["code"];
};

export const actionContextCardsOfChoiceEmpty = (): ActionContextCardsOfChoice => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfChoiceTypes[0].code,
  };
};
