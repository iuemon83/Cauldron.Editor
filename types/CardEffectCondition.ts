import { CardEffectConditionByPlaying } from "./CardEffectConditionByPlaying";
import { CardEffectConditionAsNotPlay } from "./CardEffectConditionAsNotPlay";
import { CardEffectConditionAsReserve } from "./CardEffectConditionAsReserve";

export type CardEffectCondition = {
  byPlay: CardEffectConditionByPlaying | undefined;
  byNotPlay: CardEffectConditionAsNotPlay | undefined;
  reserve: CardEffectConditionAsReserve | undefined;
};

export const CardEffectConditionEmpty = (): CardEffectCondition => {
  return {
    byPlay: undefined,
    byNotPlay: undefined,
    reserve: undefined,
  };
};
