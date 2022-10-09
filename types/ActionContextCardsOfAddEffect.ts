import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfAddEffectType } from "./CardMetaData";

export type ActionContextCardsOfAddEffect = {
  actionName: string;
  type: ActionContextCardsOfAddEffectType["code"];
};

export const actionContextCardsOfAddEffectEmpty = (): ActionContextCardsOfAddEffect => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfAddEffectTypes[0].code,
  };
};
