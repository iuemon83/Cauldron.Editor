import { ZoneValue } from "./ZoneValue";

export type ZoneCondition = {
  value: ZoneValue;
  not: boolean;
};

export const zoneConditionEmpty = (): ZoneCondition => {
  return {
    value: {
      choice: undefined,
      pureValue: [],
    },
    not: false,
  };
};
