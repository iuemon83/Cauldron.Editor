import {
  NumValueModifier,
  numValueModifierEmpty,
} from "./NumValueModifier";

export type CardEffectActionModifyDamage = {
  value: NumValueModifier;
};

export const CardEffectActionModifyDamageEmpty =
  (): CardEffectActionModifyDamage => {
    return {
      value: numValueModifierEmpty(),
    };
  };
