import { globalCache } from "../components/CauldronApi";
import { TextCompare } from "./CardMetaData";
import { TextValue, textValueEmpty } from "./TextValue";

export type TextCondition = {
  value: TextValue;
  compare: TextCompare["code"];
  not: boolean;
};

export const textConditionEmpty = (): TextCondition => {
  return {
    value: textValueEmpty(),
    compare: globalCache.metadata!.textConditionCompares[0].code,
    not: false,
  };
};
