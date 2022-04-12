import { NumCondition, numConditionEmpty } from "./NumCondition";
import { NumValue, numValueEmpty } from "./NumValue";

export type CardEffectIf = {
  numCondition: NumCondition;
  numValue: NumValue;
};

export const CardEffectIfEmpty = (): CardEffectIf => {
  return {
    numCondition: numConditionEmpty(),
    numValue: numValueEmpty(),
  };
};
