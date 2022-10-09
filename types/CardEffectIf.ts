import { ConditionWrap, conditionWrapEmpty } from "./ConditionWrap";

export type CardEffectIf = {
  condition: ConditionWrap;
};

export const CardEffectIfEmpty = (): CardEffectIf => {
  return {
    condition: conditionWrapEmpty(),
  };
};
