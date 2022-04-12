import {
  CardEffectAction,
  cardEffectActionEmpty,
} from "./CardEffectAction";
import {
  CardEffectCondition,
  CardEffectConditionEmpty,
} from "./CardEffectCondition";

export type CardEffect = {
  condition: CardEffectCondition;
  actions: CardEffectAction[];
};

export const cardEffectEmpty = (): CardEffect => {
  return {
    condition: CardEffectConditionEmpty(),
    actions: [cardEffectActionEmpty()],
  };
};
