import { globalCache } from "../components/CauldronApi";
import { CardType } from "./CardMetaData";

export type CardTypeCondition = {
  value: CardType["code"][];
  not: boolean;
};

export const cardTypeConditionEmpty = (): CardTypeCondition => {
  return {
    value: [globalCache.metadata!.cardTypes[0].code],
    not: false,
  };
};
