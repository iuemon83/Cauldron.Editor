import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingDestroyEventSource } from "./CardMetaData";

export type CardEffectTimingDestroyEvent = {
  source: CardEffectTimingDestroyEventSource["code"];
};

export const cardEffectTimingDestroyEventEmpty =
  (): CardEffectTimingDestroyEvent => {
    return {
      source: globalCache.metadata!.effectTimingDestroyEventSources[0].code,
    };
  };
