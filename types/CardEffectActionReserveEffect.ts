import { CardEffect } from "./CardEffect";

export type CardEffectActionReserveEffect = {
  effectsToReserve: CardEffect[];
};

export const cardEffectActionReserveEffectEmpty = (): CardEffectActionReserveEffect => {
  return {
    effectsToReserve: [],
  };
};
