import { CardCondition } from "./CardCondition";
import { ZoneCondition } from "./ZoneCondition";

export type CardEffectTimingExcludeCardEvent = {
  orCardConditions: CardCondition[];
  fromZoneCondition: ZoneCondition | undefined;
};

export const cardEffectTimingExcludeCardEventEmpty = (): CardEffectTimingExcludeCardEvent => {
  return {
    orCardConditions: [],
    fromZoneCondition: undefined,
  };
};
