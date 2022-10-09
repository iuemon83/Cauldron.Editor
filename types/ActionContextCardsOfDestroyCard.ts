import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfDestroyCardType } from "./CardMetaData";

export type ActionContextCardsOfDestroyCard = {
  actionName: string;
  type: ActionContextCardsOfDestroyCardType["code"];
};

export const actionContextCardsOfDestroyCardEmpty = (): ActionContextCardsOfDestroyCard => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfDestroyCardTypes[0].code,
  };
};
