import { CardEffectActionAddCard } from "./CardEffectActionAddCard";
import { CardEffectActionAddEffect } from "./CardEffectActionAddEffect";
import { CardEffectActionDamage } from "./CardEffectActionDamage";
import { CardEffectActionDestroyCard } from "./CardEffectActionDestroyCard";
import { CardEffectActionDrawCard } from "./CardEffectActionDrawCard";
import { CardEffectActionModifyCard } from "./CardEffectActionModifyCard";
import { CardEffectActionModifyDamage } from "./CardEffectActionModifyDamage";
import { CardEffectActionModifyPlayer } from "./CardEffectActionModifyPlayer";
import { CardEffectActionMoveCard } from "./CardEffectActionMoveCard";
import { CardEffectActionSetVariable } from "./CardEffectActionSetVariable";
import { CardEffectActionWin } from "./CardEffectActionWin";

export type CardEffectAction = {
  damage: CardEffectActionDamage | undefined;
  addCard: CardEffectActionAddCard | undefined;
  modifyCard: CardEffectActionModifyCard | undefined;
  destroyCard: CardEffectActionDestroyCard | undefined;
  modifyDamage: CardEffectActionModifyDamage | undefined;
  modifyPlayer: CardEffectActionModifyPlayer | undefined;
  drawCard: CardEffectActionDrawCard | undefined;
  moveCard: CardEffectActionMoveCard | undefined;
  addEffect: CardEffectActionAddEffect | undefined;
  setVariable: CardEffectActionSetVariable | undefined;
  win: CardEffectActionWin | undefined;
};

export const cardEffectActionEmpty = (): CardEffectAction => {
  return {
    damage: undefined,
    addCard: undefined,
    modifyCard: undefined,
    destroyCard: undefined,
    modifyDamage: undefined,
    modifyPlayer: undefined,
    drawCard: undefined,
    moveCard: undefined,
    addEffect: undefined,
    setVariable: undefined,
    win: undefined,
  };
};
