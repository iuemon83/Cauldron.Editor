import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionExcludeCard = {
  choice: Choice;
  name: string | undefined;
};

export const cardEffectActionExcludeCardEmpty = (): CardEffectActionExcludeCard => {
  return {
    choice: choiceEmpty(),
    name: undefined,
  };
};
