import { ActionContextCardsOfAddCard } from "./ActionContextCardsOfAddCard";
import { ActionContextCardsOfAddEffect } from "./ActionContextCardsOfAddEffect";
import { ActionContextCardsOfDamage } from "./ActionContextCardsOfDamage";
import { ActionContextCardsOfDestroyCard } from "./ActionContextCardsOfDestroyCard";
import { ActionContextCardsOfDrawCard } from "./ActionContextCardsOfDrawCard";
import { ActionContextCardsOfExcludeCard } from "./ActionContextCardsOfExcludeCard";
import { ActionContextCardsOfModifyCard } from "./ActionContextCardsOfModifyCard";
import { ActionContextCardsOfModifyCounter } from "./ActionContextCardsOfModifyCounter";
import { ActionContextCardsOfMoveCard } from "./ActionContextCardsOfMoveCard";

export type ActionContextCards = {
  addCard: ActionContextCardsOfAddCard | undefined;
  addEffect: ActionContextCardsOfAddEffect | undefined;
  damage: ActionContextCardsOfDamage | undefined;
  destroyCard: ActionContextCardsOfDestroyCard | undefined;
  drawCard: ActionContextCardsOfDrawCard | undefined;
  excludeCard: ActionContextCardsOfExcludeCard | undefined;
  modifyCard: ActionContextCardsOfModifyCard | undefined;
  modifyCounter: ActionContextCardsOfModifyCounter | undefined;
  moveCard: ActionContextCardsOfMoveCard | undefined;
};

export const actionContextCardsEmpty = (): ActionContextCards => {
  return {
    addCard: undefined,
    addEffect: undefined,
    damage: undefined,
    destroyCard: undefined,
    drawCard: undefined,
    excludeCard: undefined,
    modifyCard: undefined,
    modifyCounter: undefined,
    moveCard: undefined,
  };
};
