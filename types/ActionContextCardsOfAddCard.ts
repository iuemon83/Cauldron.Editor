import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfAddCardType } from "./CardMetaData";

export type ActionContextCardsOfAddCard = {
  actionName: string;
  type: ActionContextCardsOfAddCardType["code"];
};

export const actionContextCardsOfAddCardEmpty = (): ActionContextCardsOfAddCard => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfAddCardTypes[0].code,
  };
};
