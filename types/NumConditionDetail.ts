import { globalCache } from "../components/CauldronApi";
import { NumCompare } from "./CardMetaData";

export type NumConditionDetail = {
  value: number;
  compare: NumCompare["code"];
  not: boolean;
};

export const numConditionEmpty = (): NumConditionDetail => {
  return {
    value: 0,
    compare: globalCache.metadata!.numConditionCompares[0].code,
    not: false,
  };
};
