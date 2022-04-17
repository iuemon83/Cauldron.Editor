import { globalCache } from "../components/CauldronApi";
import { CardAbility, CreatureAbilityModifierOperator } from "./CardMetaData";

export type CreatureAbilityModifier = {
  operator: CreatureAbilityModifierOperator["code"];
  value: CardAbility["code"];
};

export const creatureAbilityModifierEmpty = (): CreatureAbilityModifier => {
  return {
    operator: globalCache.metadata!.creatureAbilityModifierOperators[0].code,
    value: globalCache.metadata!.cardAbilities[0].code,
  };
};
