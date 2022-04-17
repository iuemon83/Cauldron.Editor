import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfDamageType } from "./CardMetaData";

export type ActionContextCardsOfDamage = {
  actionName: string;
  type: ActionContextCardsOfDamageType["code"];
};

export const actionContextCardsOfDamageEmpty = (): ActionContextCardsOfDamage => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfDamageTypes[0].code,
  };
};
