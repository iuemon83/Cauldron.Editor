import { globalCache } from "../components/CauldronApi";
import { CardSetConditionType } from "./CardMetaData";
import { TextCondition, textConditionEmpty } from "./TextCondition";

export type CardSetCondition = {
  type: CardSetConditionType["code"];
  valueCondition: TextCondition;
};

export const cardSetConditionEmpty = (): CardSetCondition => {
  return {
    type: globalCache.metadata!.cardSetConditionTypes[0].code,
    valueCondition: textConditionEmpty(),
  };
};
