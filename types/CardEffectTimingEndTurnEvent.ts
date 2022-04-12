import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingEndTurnEventSource } from "./CardMetaData";

export type CardEffectTimingEndTurnEvent = {
  source: CardEffectTimingEndTurnEventSource["code"];
};

export const cardEffectTimingEndTurnEventEmpty =
  (): CardEffectTimingEndTurnEvent => {
    return {
      source: globalCache.metadata!.effectTimingEndTurnEventSources[0].code,
    };
  };
