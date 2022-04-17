import { NumValueModifier, numValueModifierEmpty } from "./NumValueModifier";

export type CardEffectActionModifyDamage = {
  value: NumValueModifier;
  name: string | undefined;
};

export const CardEffectActionModifyDamageEmpty = (): CardEffectActionModifyDamage => {
  return {
    value: numValueModifierEmpty(),
    name: undefined,
  };
};
