import { CardEffectActionAddCardDetail } from "./CardEffectActionAddCardDetail";
import { CardEffectActionAddEffectDetail } from "./CardEffectActionAddEffectDetail";
import { CardEffectActionDamageDetail } from "./CardEffectActionDamageDetail";
import { CardEffectActionDestroyCardDetail } from "./CardEffectActionDestroyCardDetail";
import { CardEffectActionDrawCardDetail } from "./CardEffectActionDrawCardDetail";
import { CardEffectActionModifyCardDetail } from "./CardEffectActionModifyCardDetail";
import { CardEffectActionModifyDamageDetail } from "./CardEffectActionModifyDamageDetail";
import { CardEffectActionModifyPlayerDetail } from "./CardEffectActionModifyPlayerDetail";
import { CardEffectActionMoveCardDetail } from "./CardEffectActionMoveCardDetail";
import { CardEffectActionSetVariableDetail } from "./CardEffectActionSetVariableDetail";
import { CardEffectActionWinDetail } from "./CardEffectActionWinDetail";

export type CardEffectActionDetail = {
  damage: CardEffectActionDamageDetail | undefined;
  addCard: CardEffectActionAddCardDetail | undefined;
  modifyCard: CardEffectActionModifyCardDetail | undefined;
  destroyCard: CardEffectActionDestroyCardDetail | undefined;
  modifyDamage: CardEffectActionModifyDamageDetail | undefined;
  modifyPlayer: CardEffectActionModifyPlayerDetail | undefined;
  drawCard: CardEffectActionDrawCardDetail | undefined;
  moveCard: CardEffectActionMoveCardDetail | undefined;
  addEffect: CardEffectActionAddEffectDetail | undefined;
  setVariable: CardEffectActionSetVariableDetail | undefined;
  win: CardEffectActionWinDetail | undefined;
};

export const cardEffectActionEmpty = (): CardEffectActionDetail => {
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
