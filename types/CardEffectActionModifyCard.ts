import { Choice, choiceEmpty } from "./Choice";
import { NumValueModifier } from "./NumValueModifier";
import { CreatureAbilityModifier } from "./CreatureAbilityModifier";
import { AnnotationsModifier } from "./AnnotationsModifier";

export type CardEffectActionModifyCard = {
  cost: NumValueModifier | undefined;
  power: NumValueModifier | undefined;
  toughness: NumValueModifier | undefined;
  ability: CreatureAbilityModifier | undefined;
  annotations: AnnotationsModifier | undefined;
  choice: Choice;
};

export const CardEffectActionModifyCardEmpty = (): CardEffectActionModifyCard => {
  return {
    cost: undefined,
    power: undefined,
    toughness: undefined,
    ability: undefined,
    annotations: undefined,
    choice: choiceEmpty(),
  };
};
