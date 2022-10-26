import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionChoice = {
  choice: Choice;
  name: string | undefined;
};

export const cardEffectActionChoiceEmpty = (): CardEffectActionChoice => {
  return {
    choice: choiceEmpty(),
    name: undefined,
  };
};
