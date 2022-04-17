import { globalCache } from "../components/CauldronApi";
import { ChoiceHow } from "./CardMetaData";
import { NumValue, numValueEmpty } from "./NumValue";
import { PlayerCondition } from "./PlayerCondition";
import { CardCondition } from "./CardCondition";
import { CardDefCondition } from "./CardDefCondition";

export type ChoiceSource = {
  how: ChoiceHow["code"];
  numPicks: NumValue;
  orPlayerConditions: PlayerCondition[];
  orCardConditions: CardCondition[];
  orCardDefConditions: CardDefCondition[];
};

export const choiceSourceEmpty = (): ChoiceSource => {
  return {
    how: globalCache.metadata!.choiceSourceHowList[0].code,
    numPicks: numValueEmpty(),
    orPlayerConditions: [],
    orCardConditions: [],
    orCardDefConditions: [],
  };
};
