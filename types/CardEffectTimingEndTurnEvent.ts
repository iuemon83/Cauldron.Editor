import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingEndTurnEvent = {
  orPlayerConditions: PlayerCondition[];
};

export const cardEffectTimingEndTurnEventEmpty =
  (): CardEffectTimingEndTurnEvent => {
    return {
      orPlayerConditions: [],
    };
  };
