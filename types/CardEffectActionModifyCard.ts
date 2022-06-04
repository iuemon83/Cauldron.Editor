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
  numTurnsToCanAttackToCreature: NumValueModifier | undefined;
  numTurnsToCanAttackToPlayer: NumValueModifier | undefined;
  choice: Choice;
  name: string | undefined;
};

export const CardEffectActionModifyCardEmpty = (): CardEffectActionModifyCard => {
  return {
    cost: undefined,
    power: undefined,
    toughness: undefined,
    ability: undefined,
    annotations: undefined,
    numTurnsToCanAttackToCreature: undefined,
    numTurnsToCanAttackToPlayer: undefined,
    choice: choiceEmpty(),
    name: undefined,
  };
};
