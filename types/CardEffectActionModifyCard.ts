import { Choice, choiceEmpty } from "./Choice";
import { NumValueModifier } from "./NumValueModifier";

export type CardEffectActionModifyCard = {
  cost: NumValueModifier | undefined;
  power: NumValueModifier | undefined;
  toughness: NumValueModifier | undefined;
  choice: Choice;
};

export const CardEffectActionModifyCardEmpty = (): CardEffectActionModifyCard => {
  return {
    cost: undefined,
    power: undefined,
    toughness: undefined,
    choice: choiceEmpty(),
  };
};
