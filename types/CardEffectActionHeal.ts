import { Choice, choiceEmpty } from "./Choice";
import { NumValue, numValueEmpty } from "./NumValue";

export type CardEffectActionHeal = {
  value: NumValue;
  choice: Choice;
  name: string | undefined;
};

export const CardEffectActionHealEmpty = (): CardEffectActionHeal => {
  return {
    value: numValueEmpty(),
    choice: choiceEmpty(),
    name: undefined,
  };
};
