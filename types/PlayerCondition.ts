import { globalCache } from "../components/CauldronApi";
import { PlayerConditionContext } from "./CardMetaData";
import { NumCompare } from "./NumCompare";

export type PlayerCondition = {
  context: PlayerConditionContext["code"];
  isFirst: boolean | undefined;
  maxHpCondition: NumCompare | undefined;
  currentHpCondition: NumCompare | undefined;
  maxMpCondition: NumCompare | undefined;
  currentMpCondition: NumCompare | undefined;
};

export const playerConditionEmpty = (): PlayerCondition => {
  return {
    context: globalCache.metadata!.playerConditionContexts[0].code,
    isFirst: undefined,
    maxHpCondition: undefined,
    currentHpCondition: undefined,
    maxMpCondition: undefined,
    currentMpCondition: undefined,
  };
};
