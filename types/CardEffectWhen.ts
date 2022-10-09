import {
  CardEffectTiming,
  cardEffectTimingEmpty,
} from "./CardEffectTiming";

export type CardEffectWhen = {
  timing: CardEffectTiming;
};
export const CardEffectWhenEmpty = (): CardEffectWhen => {
  return {
    timing: cardEffectTimingEmpty(),
  };
};
