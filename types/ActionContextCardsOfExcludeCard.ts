import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfExcludeCardType } from "./CardMetaData";

export type ActionContextCardsOfExcludeCard = {
  actionName: string;
  type: ActionContextCardsOfExcludeCardType["code"];
};

export const actionContextCardsOfExcludeCardEmpty = (): ActionContextCardsOfExcludeCard => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfExcludeCardTypes[0].code,
  };
};
