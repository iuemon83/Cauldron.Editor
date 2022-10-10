import { CardCondition } from "./CardCondition";
import { ZoneCondition } from "./ZoneCondition";

export type CardEffectTimingMoveCardEvent = {
  orCardConditions: CardCondition[];
  from: ZoneCondition | undefined;
  to: ZoneCondition | undefined;
};

export const cardEffectTimingMoveCardEventEmpty = (): CardEffectTimingMoveCardEvent => {
  return {
    orCardConditions: [],
    from: undefined,
    to: undefined,
  };
};
