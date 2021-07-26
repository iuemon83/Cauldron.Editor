import { globalCache } from "../components/CauldronApi";
import { CardConditionDetail } from "./CardConditionDetail";
import { CardEffectTimingPlayEventSource } from "./CardMetaData";

export type CardEffectTimingPlayEventDetail = {
  source: CardEffectTimingPlayEventSource["code"];
  cardCondition: CardConditionDetail | undefined;
};

export const cardEffectTimingPlayEventEmpty =
  (): CardEffectTimingPlayEventDetail => {
    return {
      source: globalCache.metadata!.effectTimingPlayEventSources[0].code,
      cardCondition: undefined,
    };
  };
