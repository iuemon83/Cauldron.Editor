import { Choice, choiceEmpty } from "./Choice";
import { NumValueModifier, numValueModifierEmpty } from "./NumValueModifier";

export type CardEffectActionModifyNumFields = {
  choicePlayers: Choice;
  diffNum: NumValueModifier;
  name: string | undefined;
};

export const CardEffectActionModifyNumFieldsEmpty = (): CardEffectActionModifyNumFields => {
  return {
    choicePlayers: choiceEmpty(),
    diffNum: numValueModifierEmpty(),
    name: undefined,
  };
};
