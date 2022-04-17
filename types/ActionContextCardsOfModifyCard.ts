import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfModifyCardType } from "./CardMetaData";

export type ActionContextCardsOfModifyCard = {
  actionName: string;
  type: ActionContextCardsOfModifyCardType["code"];
};

export const actionContextCardsOfModifyCardEmpty = (): ActionContextCardsOfModifyCard => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfModifyCardTypes[0].code,
  };
};
