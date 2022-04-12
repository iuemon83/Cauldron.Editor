import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingStartTurnEventSource } from "./CardMetaData";

export type CardEffectTimingStartTurnEvent = {
  source: CardEffectTimingStartTurnEventSource["code"];
};

export const cardEffectTimingStartTurnEventEmpty =
  (): CardEffectTimingStartTurnEvent => {
    return {
      source: globalCache.metadata!.effectTimingStartTurnEventSources[0].code,
    };
  };
