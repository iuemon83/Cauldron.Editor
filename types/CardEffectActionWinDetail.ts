import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";

export type CardEffectActionWinDetail = {
  choicePlayers: ChoiceDetail;
};

export const CardEffectActionWinEmpty = (): CardEffectActionWinDetail => {
  return {
    choicePlayers: choiceEmpty(),
  };
};
