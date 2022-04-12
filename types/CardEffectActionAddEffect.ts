import { CardEffect, cardEffectEmpty } from "./CardEffect";
import { Choice, choiceEmpty } from "./Choice";

export type CardEffectActionAddEffect = {
  cardsChoice: Choice;
  effectToAdd: CardEffect[];
};

export const cardEffectActionAddEffectEmpty = (): CardEffectActionAddEffect => {
  return {
    cardsChoice: choiceEmpty(),
    effectToAdd: [cardEffectEmpty()],
  };
};
