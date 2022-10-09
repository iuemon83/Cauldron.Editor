import {
  CardEffectTiming,
  cardEffectTimingEmpty,
} from "./CardEffectTiming";

export type CardEffectWhile = {
  timing: CardEffectTiming;
  skip: number;
  take: number;
};

export const CardEffectWhileEmpty = (): CardEffectWhile => {
  return {
    timing: cardEffectTimingEmpty(),
    skip: 0,
    take: 0,
  };
};
