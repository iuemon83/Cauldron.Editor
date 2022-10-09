import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import { EffectTimingModifyCounterOnCardEventOperator } from "./CardMetaData";

export type CardEffectTimingModifyCounterOnCardEvent = {
  orCardConditions: CardCondition[];
  countername: string;
  operator: EffectTimingModifyCounterOnCardEventOperator["code"];
};

export const cardEffectTimingModifyCounterOnCardEventEmpty = (): CardEffectTimingModifyCounterOnCardEvent => {
  return {
    orCardConditions: [],
    countername: "",
    operator: globalCache.metadata!.effectTimingModifyCounterOnCardEventOperators[0].code,
  };
};
