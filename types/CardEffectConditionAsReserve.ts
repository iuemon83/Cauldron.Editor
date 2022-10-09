import { CardEffectIf } from "./CardEffectIf";
import { CardEffectWhen } from "./CardEffectWhen";
import { CardEffectWhile } from "./CardEffectWhile";

export type CardEffectConditionAsReserve = {
  when: CardEffectWhen | undefined;
  while: CardEffectWhile | undefined;
  if: CardEffectIf | undefined;
};

export const CardEffectConditionAsReserveEmpty = (): CardEffectConditionAsReserve => {
  return {
    when: undefined,
    while: undefined,
    if: undefined,
  };
};
