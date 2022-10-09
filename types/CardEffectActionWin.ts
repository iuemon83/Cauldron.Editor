import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionWin = {
  choicePlayers: Choice;
  name: string | undefined;
};

export const CardEffectActionWinEmpty = (): CardEffectActionWin => {
  return {
    choicePlayers: choiceEmpty(),
    name: undefined,
  };
};
