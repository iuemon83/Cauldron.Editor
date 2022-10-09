import { globalCache } from "../components/CauldronApi";
import { Operator } from "./CardMetaData";
import { NumValue, numValueEmpty } from "./NumValue";

export type NumValueModifier = {
  operator: Operator["code"];
  value: NumValue;
};

export const numValueModifierEmpty = (): NumValueModifier => {
  return {
    operator: globalCache.metadata!.numValueModifierOperators[0].code,
    value: numValueEmpty(),
  };
};
