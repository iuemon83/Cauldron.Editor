import { Choice, choiceEmpty } from "./Choice";
import { PlayerModifier, playerModifierEmpty } from "./PlayerModifier";

export type CardEffectActionModifyPlayer = {
  playerModifier: PlayerModifier;
  choice: Choice;
  name: string | undefined;
};

export const cardEffectActionModifyPlayerEmpty = (): CardEffectActionModifyPlayer => {
  return {
    playerModifier: playerModifierEmpty(),
    choice: choiceEmpty(),
    name: undefined,
  };
};
