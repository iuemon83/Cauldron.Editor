import { globalCache } from "../components/CauldronApi";
import { ActionContextCardsOfModifyCounterType } from "./CardMetaData";

export type ActionContextCardsOfModifyCounter = {
  actionName: string;
  type: ActionContextCardsOfModifyCounterType["code"];
};

export const actionContextCardsOfModifyCounterEmpty = (): ActionContextCardsOfModifyCounter => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCardsOfModifyCounterTypes[0].code,
  };
};
