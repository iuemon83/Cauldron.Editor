import { Choice, choiceEmpty } from "./Choice";
import { NumValue, numValueEmpty } from "./NumValue";

export type CardEffectActionDamage = {
  value: NumValue;
  choice: Choice;
};

export const CardEffectActionDamageEmpty = (): CardEffectActionDamage => {
  return {
    value: numValueEmpty(),
    choice: choiceEmpty(),
  };
};
