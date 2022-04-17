import { CardCondition } from "./CardCondition";

export type CardEffectTimingDestroyEvent = {
  orCardConditions: CardCondition[];
};

export const cardEffectTimingDestroyEventEmpty =
  (): CardEffectTimingDestroyEvent => {
    return {
      orCardConditions: [],
    };
  };
