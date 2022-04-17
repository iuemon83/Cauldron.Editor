import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionDestroyCard = {
  choice: Choice;
  name: string | undefined;
};

export const CardEffectActionDestroyCardEmpty = (): CardEffectActionDestroyCard => {
  return {
    choice: choiceEmpty(),
    name: undefined,
  };
};
