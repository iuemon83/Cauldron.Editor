import { NumCompare, numCompareEmpty } from "./NumCompare";
import { NumValue, numValueEmpty } from "./NumValue";

export type NumCondition = {
  value: NumValue;
  compare: NumCompare;
  not: boolean;
};

export const numConditionEmpty = (): NumCondition => {
  return {
    value: numValueEmpty(),
    compare: numCompareEmpty(),
    not: false,
  };
};
