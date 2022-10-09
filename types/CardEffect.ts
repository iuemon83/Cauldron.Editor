import { CardEffectAction, cardEffectActionEmpty } from "./CardEffectAction";
import { CardEffectCondition, CardEffectConditionEmpty } from "./CardEffectCondition";

export type CardEffect = {
  description: string;
  condition: CardEffectCondition;
  actions: CardEffectAction[];
};

export const cardEffectEmpty = (): CardEffect => {
  return {
    description: "",
    condition: CardEffectConditionEmpty(),
    actions: [cardEffectActionEmpty()],
  };
};
