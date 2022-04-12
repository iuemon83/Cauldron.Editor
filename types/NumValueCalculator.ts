import { globalCache } from "../components/CauldronApi";
import { NumValueCalculatorValueType } from "./CardMetaData";
import { Choice, choiceEmpty } from "./Choice";

export type NumValueCalculator = {
  type: NumValueCalculatorValueType["code"];
  cardsChoice: Choice;
};

export const numValueCalculatorEmpty = (): NumValueCalculator => {
  return {
    type: globalCache.metadata!.numValueCalculatorValueTypes[0].code,
    cardsChoice: choiceEmpty(),
  };
};
