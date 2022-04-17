import { globalCache } from "../components/CauldronApi";
import { AnnotationsModifierOperator } from "./CardMetaData";

export type AnnotationsModifier = {
  operator: AnnotationsModifierOperator["code"];
  value: string[];
};

export const annotationsModifierEmpty = (): AnnotationsModifier => {
  return {
    operator: globalCache.metadata!.annotationsModifierOperators[0].code,
    value: [],
  };
};
