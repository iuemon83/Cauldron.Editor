import { ConditionWrap } from "./ConditionWrap";

export type ConditionOr = {
  conditions: ConditionWrap[];
};

export const conditionOrEmpty = (): ConditionOr => {
  return {
    conditions: [],
  };
};
