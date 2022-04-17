import { globalCache } from "../components/CauldronApi";
import { CardAbility, AnnotationsModifierOperator } from "./CardMetaData";

export type AnnotationsModifier = {
  operator: AnnotationsModifierOperator["code"];
  value: CardAbility["code"];
};

export const annotationsModifierEmpty = (): AnnotationsModifier => {
  return {
    operator: globalCache.metadata!.annotationsModifierOperators[0].code,
    value: globalCache.metadata!.cardAbilities[0].code,
  };
};
