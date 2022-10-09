import { globalCache } from "../components/CauldronApi";
import { ChoiceHow } from "./CardMetaData";
import { ChoiceSource, choiceSourceEmpty } from "./ChoiceSource";
import { NumValue, numValueEmpty } from "./NumValue";

export type Choice = {
  how: ChoiceHow["code"];
  numPicks: NumValue;
  source: ChoiceSource;
};

export const choiceEmpty = (): Choice => {
  return {
    how: "all",
    numPicks: numValueEmpty(),
    source: choiceSourceEmpty(),
  };
};
