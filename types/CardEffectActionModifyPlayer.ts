import { Choice, choiceEmpty } from "./Choice";
import {
  PlayerModifier,
  playerModifierEmpty,
} from "./PlayerModifier";

export type CardEffectActionModifyPlayer = {
  playerModifier: PlayerModifier;
  choice: Choice;
};

export const cardEffectActionModifyPlayerEmpty = (): CardEffectActionModifyPlayer => {
  return {
    playerModifier: playerModifierEmpty(),
    choice: choiceEmpty(),
  };
};
