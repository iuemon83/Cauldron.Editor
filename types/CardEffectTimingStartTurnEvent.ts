import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingStartTurnEvent = {
  orPlayerConditions: PlayerCondition[];
};

export const cardEffectTimingStartTurnEventEmpty =
  (): CardEffectTimingStartTurnEvent => {
    return {
      orPlayerConditions:[],
    };
  };
