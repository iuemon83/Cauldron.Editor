import { CardEffectTimingDamageBeforeEvent } from "./CardEffectTimingDamageBeforeEvent";
import { CardEffectTimingDestroyEvent } from "./CardEffectTimingDestroyEvent";
import { CardEffectTimingEndTurnEvent } from "./CardEffectTimingEndTurnEvent";
import { CardEffectTimingMoveCardEvent } from "./CardEffectTimingMoveCardEvent";
import { CardEffectTimingPlayEvent } from "./CardEffectTimingPlayEvent";
import { CardEffectTimingStartTurnEvent } from "./CardEffectTimingStartTurnEvent";
import { CardEffectTimingExcludeCardEvent } from "./CardEffectTimingExcludeCardEvent";
import { CardEffectTimingModifyCounterOnCardEvent } from "./CardEffectTimingModifyCounterOnCardEvent";
import { CardEffectTimingAttackBeforeEvent } from "./CardEffectTimingAttackBeforeEvent";

export type CardEffectTiming = {
  startTurn: CardEffectTimingStartTurnEvent | undefined;
  endTurn: CardEffectTimingEndTurnEvent | undefined;
  play: CardEffectTimingPlayEvent | undefined;
  destroy: CardEffectTimingDestroyEvent | undefined;
  attackBefore: CardEffectTimingAttackBeforeEvent | undefined;
  attackAfter: CardEffectTimingAttackBeforeEvent | undefined;
  damageBefore: CardEffectTimingDamageBeforeEvent | undefined;
  damageAfter: CardEffectTimingDamageBeforeEvent | undefined;
  moveCard: CardEffectTimingMoveCardEvent | undefined;
  excludeCard: CardEffectTimingExcludeCardEvent | undefined;
  modifyCounter: CardEffectTimingModifyCounterOnCardEvent | undefined;
};

export const cardEffectTimingEmpty = (): CardEffectTiming => {
  return {
    startTurn: undefined,
    endTurn: undefined,
    play: undefined,
    destroy: undefined,
    attackBefore: undefined,
    attackAfter: undefined,
    damageBefore: undefined,
    damageAfter: undefined,
    moveCard: undefined,
    excludeCard: undefined,
    modifyCounter: undefined,
  };
};

export type EffectActionType = keyof CardEffectTiming;
