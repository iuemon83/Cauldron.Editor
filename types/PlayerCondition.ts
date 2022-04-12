import { globalCache } from "../components/CauldronApi";
import { PlayerConditionContext, PlayerConditionType } from "./CardMetaData";

export type PlayerCondition = {
  context: PlayerConditionContext["code"];
  type: PlayerConditionType["code"];
};

export const playerConditionEmpty = (): PlayerCondition => {
  return {
    context: globalCache.metadata!.playerConditionContexts[0].code,
    type: globalCache.metadata!.playerConditionTypes[0].code,
  };
};
