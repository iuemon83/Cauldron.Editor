import { NumCompare, numCompareEmpty } from "./NumCompare";

export type CounterCondition = {
  counterName: string;
  numCountersCondition: NumCompare;
};

export const counterConditionEmpty = (): CounterCondition => {
  return {
    counterName: "",
    numCountersCondition: numCompareEmpty(),
  };
};
