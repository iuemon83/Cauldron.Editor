import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionDestroyCard = {
  choice: Choice;
};

export const CardEffectActionDestroyCardEmpty = (): CardEffectActionDestroyCard => {
  return {
    choice: choiceEmpty(),
  };
};
