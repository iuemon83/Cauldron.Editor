import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import { ChoiceHow } from "./CardMetaData";
import { NumValue, numValueEmpty } from "./NumValue";
import { PlayerCondition } from "./PlayerCondition";

export type ChoiceSource = {
  how: ChoiceHow["code"];
  numPicks: NumValue;
  orPlayerConditions: PlayerCondition[];
  orCardConditions: CardCondition[];
};

export const choiceSourceEmpty = (): ChoiceSource => {
  return {
    how: globalCache.metadata!.choiceHowList[0].code,
    numPicks: numValueEmpty(),
    orPlayerConditions: [],
    orCardConditions: [],
  };
};
