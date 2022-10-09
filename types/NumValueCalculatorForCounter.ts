import { Choice, choiceEmpty } from "./Choice";
import { ActionContextCounters } from "./ActionContextCounters";

export type NumValueCalculatorForCounter = {
  counterName: string | undefined;
  targetChoice: Choice;
  actionContextCounters: ActionContextCounters | undefined;
};

export const numValueCalculatorForCounterEmpty = (): NumValueCalculatorForCounter => {
  return {
    counterName: undefined,
    targetChoice: choiceEmpty(),
    actionContextCounters: undefined,
  };
};
