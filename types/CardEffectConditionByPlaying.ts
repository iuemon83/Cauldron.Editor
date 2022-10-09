import { CardEffectIf } from "./CardEffectIf";

export type CardEffectConditionByPlaying = {
  if: CardEffectIf | undefined;
};

export const CardEffectConditionByPlayingEmpty = (): CardEffectConditionByPlaying => {
  return {
    if: undefined,
  };
};
