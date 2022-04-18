import { ConditionWrap } from "./ConditionWrap";

export type ConditionNot = {
  conditions: ConditionWrap[];
};

export const conditionNotEmpty = (): ConditionNot => {
  return {
    conditions: [],
  };
};
