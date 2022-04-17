import { globalCache } from "../components/CauldronApi";
import { NumConditionCompare } from "./CardMetaData";
import { NumValue, numValueEmpty } from "./NumValue";

export type NumCondition = {
  value: NumValue;
  compare: NumConditionCompare["code"];
  not: boolean;
};

export const numConditionEmpty = (): NumCondition => {
  return {
    value: numValueEmpty(),
    compare: globalCache.metadata!.numConditionCompares[0].code,
    not: false,
  };
};
