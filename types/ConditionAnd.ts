import { ConditionWrap } from "./ConditionWrap";

export type ConditionAnd = {
  conditions: ConditionWrap[];
};

export const conditionAndEmpty = (): ConditionAnd => {
  return {
    conditions: [],
  };
};
