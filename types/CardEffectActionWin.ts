import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionWin = {
  choicePlayers: Choice;
};

export const CardEffectActionWinEmpty = (): CardEffectActionWin => {
  return {
    choicePlayers: choiceEmpty(),
  };
};
