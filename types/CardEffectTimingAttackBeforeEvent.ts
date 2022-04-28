import { CardCondition } from "./CardCondition";

export type CardEffectTimingAttackBeforeEvent = {
  attackCardCondition: CardCondition | undefined;
  guardCardCondition: CardCondition | undefined;
};

export const cardEffectTimingAttackBeforeEventEmpty = (): CardEffectTimingAttackBeforeEvent => {
  return {
    attackCardCondition: undefined,
    guardCardCondition: undefined,
  };
};
