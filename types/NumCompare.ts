import { globalCache } from "../components/CauldronApi";
import { NumConditionCompare } from "./CardMetaData";
import { NumValue, numValueEmpty } from "./NumValue";

export type NumCompare = {
  value: NumValue;
  compare: NumConditionCompare["code"];
};

export const numCompareEmpty = (): NumCompare => {
  return {
    value: numValueEmpty(),
    compare: globalCache.metadata!.numConditionCompares[0].code,
  };
};
