import { globalCache } from "../components/CauldronApi";
import { ActionContextCountersOfModifyCounterType } from "./CardMetaData";

export type ActionContextCountersOfModifyCounter = {
  actionName: string;
  type: ActionContextCountersOfModifyCounterType["code"];
};

export const actionContextCountersOfModifyCounterEmpty = (): ActionContextCountersOfModifyCounter => {
  return {
    actionName: "",
    type: globalCache.metadata!.actionContextCountersOfModifyCounterTypes[0].code,
  };
};
