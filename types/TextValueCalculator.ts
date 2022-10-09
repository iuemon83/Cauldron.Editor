import { globalCache } from "../components/CauldronApi";
import { TextValueCalculatorValueType } from "./CardMetaData";
import { Choice, choiceEmpty } from "./Choice";

export type TextValueCalculator = {
  type: TextValueCalculatorValueType["code"];
  cardsChoice: Choice;
};

export const textValueCalculatorEmpty = (): TextValueCalculator => {
  return {
    type: globalCache.metadata!.textValueCalculatorValueTypes[0].code,
    cardsChoice: choiceEmpty(),
  };
};
