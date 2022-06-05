import { globalCache } from "../components/CauldronApi";
import { NumValueCalculatorForPlayerType } from "./CardMetaData";
import { Choice, choiceEmpty } from "./Choice";

export type NumValueCalculatorForPlayer = {
  type: NumValueCalculatorForPlayerType["code"];
  playersChoice: Choice;
};

export const numValueCalculatorForPlayerEmpty = (): NumValueCalculatorForPlayer => {
  return {
    type: globalCache.metadata!.numValueCalculatorForPlayerTypes[0].code,
    playersChoice: choiceEmpty(),
  };
};
