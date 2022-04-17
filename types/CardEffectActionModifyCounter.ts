import { Choice, choiceEmpty } from "./Choice";
import { NumValueModifier, numValueModifierEmpty } from "./NumValueModifier";

export type CardEffectActionModifyCounter = {
  targetsChoice: Choice;
  counterName: string;
  numCountersModifier: NumValueModifier;
  name: string | undefined;
};

export const cardEffectActionModifyCounterEmpty = (): CardEffectActionModifyCounter => {
  return {
    counterName: "",
    targetsChoice: choiceEmpty(),
    numCountersModifier: numValueModifierEmpty(),
    name: undefined,
  };
};
