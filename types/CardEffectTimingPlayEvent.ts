import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import { CardEffectTimingPlayEventSource } from "./CardMetaData";

export type CardEffectTimingPlayEvent = {
  source: CardEffectTimingPlayEventSource["code"];
  cardCondition: CardCondition | undefined;
};

export const cardEffectTimingPlayEventEmpty =
  (): CardEffectTimingPlayEvent => {
    return {
      source: globalCache.metadata!.effectTimingPlayEventSources[0].code,
      cardCondition: undefined,
    };
  };
