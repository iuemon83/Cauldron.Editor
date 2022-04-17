import { CardCondition } from "./CardCondition";

export type CardEffectTimingPlayEvent = {
  orCardConditions: CardCondition[];
  cardCondition: CardCondition | undefined;
};

export const cardEffectTimingPlayEventEmpty =
  (): CardEffectTimingPlayEvent => {
    return {
      orCardConditions:[],
      cardCondition: undefined,
    };
  };
