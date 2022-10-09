import { globalCache } from "../components/CauldronApi";
import { NumValueCalculatorForCardType } from "./CardMetaData";
import { Choice, choiceEmpty } from "./Choice";

export type NumValueCalculatorForCard = {
  type: NumValueCalculatorForCardType["code"];
  cardsChoice: Choice;
};

export const numValueCalculatorForCardEmpty = (): NumValueCalculatorForCard => {
  return {
    type: globalCache.metadata!.numValueCalculatorForCardTypes[0].code,
    cardsChoice: choiceEmpty(),
  };
};
