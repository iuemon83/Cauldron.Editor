import { Choice, choiceEmpty } from "./Choice";
import { ActionContextCounters } from "./ActionContextCounters";

export type NumValueCalculatorForCounter = {
  counterName: string | undefined;
  cardsChoice: Choice;
  actionContextCounters: ActionContextCounters | undefined;
};

export const numValueCalculatorForCounterEmpty = (): NumValueCalculatorForCounter => {
  return {
    counterName: undefined,
    cardsChoice: choiceEmpty(),
    actionContextCounters: undefined,
  };
};
