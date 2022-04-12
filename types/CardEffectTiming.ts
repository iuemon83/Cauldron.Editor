import { CardEffectTimingDamageBeforeEvent } from "./CardEffectTimingDamageBeforeEvent";
import { CardEffectTimingDestroyEvent } from "./CardEffectTimingDestroyEvent";
import { CardEffectTimingEndTurnEvent } from "./CardEffectTimingEndTurnEvent";
import { CardEffectTimingMoveCardEvent } from "./CardEffectTimingMoveCardEvent";
import { CardEffectTimingPlayEvent } from "./CardEffectTimingPlayEvent";
import { CardEffectTimingStartTurnEvent } from "./CardEffectTimingStartTurnEvent";

export type CardEffectTiming = {
  startTurn: CardEffectTimingStartTurnEvent | undefined;
  endTurn: CardEffectTimingEndTurnEvent | undefined;
  play: CardEffectTimingPlayEvent | undefined;
  moveCard: CardEffectTimingMoveCardEvent | undefined;
  destroy: CardEffectTimingDestroyEvent | undefined;
  damageBefore: CardEffectTimingDamageBeforeEvent | undefined;
};

export const cardEffectTimingEmpty = (): CardEffectTiming => {
  return {
    startTurn: undefined,
    endTurn: undefined,
    play: undefined,
    moveCard: undefined,
    destroy: undefined,
    damageBefore: undefined,
  };
};

export type EffectActionType = keyof CardEffectTiming;
