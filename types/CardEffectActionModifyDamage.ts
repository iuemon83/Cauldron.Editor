import { Choice, choiceEmpty } from "./Choice";
import {
  NumValueModifier,
  numValueModifierEmpty,
} from "./NumValueModifier";

export type CardEffectActionModifyDamage = {
  value: NumValueModifier;
  choice: Choice | undefined;
};

export const CardEffectActionModifyDamageEmpty =
  (): CardEffectActionModifyDamage => {
    return {
      value: numValueModifierEmpty(),
      choice: undefined,
    };
  };
