import { globalCache } from "../components/CauldronApi";
import { ChoiceHow } from "./CardMetaData";
import { ChoiceSource, choiceSourceEmpty } from "./ChoiceSource";

export type Choice = {
  how: ChoiceHow["code"];
  numPicks: number;
  source: ChoiceSource;
};

export const choiceEmpty = (): Choice => {
  return {
    how: globalCache.metadata!.choiceHowList[0].code,
    numPicks: 0,
    source: choiceSourceEmpty(),
  };
};
