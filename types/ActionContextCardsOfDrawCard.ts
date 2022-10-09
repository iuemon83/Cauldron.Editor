import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfDrawCardType } from "./CardMetaData";

export type ActionContextCardsOfDrawCard = {
  actionName: string;
  type: ActionContextCardsOfDrawCardType["code"];
};

export const actionContextCardsOfDrawCardEmpty = (): ActionContextCardsOfDrawCard => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfDrawCardTypes[0].code,
  };
};
