import { globalCache } from "../components/CauldronApi";
import { PlayerConditionContext } from "./CardMetaData";

export type PlayerCondition = {
  context: PlayerConditionContext["code"];
};

export const playerConditionEmpty = (): PlayerCondition => {
  return {
    context: globalCache.metadata!.playerConditionContexts[0].code,
  };
};
