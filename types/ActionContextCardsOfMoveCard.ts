import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfMoveCardType } from "./CardMetaData";

export type ActionContextCardsOfMoveCard = {
  actionName: string;
  type: ActionContextCardsOfMoveCardType["code"];
};

export const actionContextCardsOfMoveCardEmpty = (): ActionContextCardsOfMoveCard => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfMoveCardTypes[0].code,
  };
};
