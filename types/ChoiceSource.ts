import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import { ChoiceHow } from "./CardMetaData";
import { PlayerCondition } from "./PlayerCondition";

export type ChoiceSource = {
  how: ChoiceHow["code"];
  numPicks: number;
  orPlayerConditions: PlayerCondition[];
  orCardConditions: CardCondition[];
};

export const choiceSourceEmpty = (): ChoiceSource => {
  return {
    how: globalCache.metadata!.choiceHowList[0].code,
    numPicks: 0,
    orPlayerConditions: [],
    orCardConditions: [],
  };
};
