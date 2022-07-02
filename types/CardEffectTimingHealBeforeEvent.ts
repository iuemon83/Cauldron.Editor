import { CardCondition } from "./CardCondition";
import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingHealBeforeEvent = {
  sourceCardCondition: CardCondition | undefined;
  takePlayerCondition: PlayerCondition | undefined;
  takeCardCondition: CardCondition | undefined;
};

export const cardEffectTimingHealBeforeEventEmpty = (): CardEffectTimingHealBeforeEvent => {
  return {
    sourceCardCondition: undefined,
    takePlayerCondition: undefined,
    takeCardCondition: undefined,
  };
};
