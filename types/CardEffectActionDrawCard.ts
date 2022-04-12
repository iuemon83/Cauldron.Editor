import { NumValue, numValueEmpty } from "./NumValue";
import {
  PlayerCondition,
  playerConditionEmpty,
} from "./PlayerCondition";

export type CardEffectActionDrawCard = {
  numCards: NumValue;
  playerCondition: PlayerCondition;
};

export const CardEffectActionDrawCardEmpty = (): CardEffectActionDrawCard => {
  return {
    numCards: numValueEmpty(),
    playerCondition: playerConditionEmpty(),
  };
};
