import { CardEffect } from "./CardEffect";

export type CardEffectActionReserveEffect = {
  effectsToReserve: CardEffect[];
  name: string | undefined;
};

export const cardEffectActionReserveEffectEmpty = (): CardEffectActionReserveEffect => {
  return {
    effectsToReserve: [],
    name: undefined,
  };
};
