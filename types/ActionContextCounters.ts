import { ActionContextCountersOfModifyCounter } from "./ActionContextCountersOfModifyCounter";

export type ActionContextCounters = {
  ofModifyCounter: ActionContextCountersOfModifyCounter | undefined;
};

export const actionContextCountersEmpty = (): ActionContextCounters => {
  return {
    ofModifyCounter: undefined,
  };
};
