import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingMoveCardEventSource, ZoneName } from "./CardMetaData";

export type CardEffectTimingMoveCardEvent = {
  source: CardEffectTimingMoveCardEventSource["code"];
  from: ZoneName["code"];
  to: ZoneName["code"];
};

export const cardEffectTimingMoveCardEventEmpty =
  (): CardEffectTimingMoveCardEvent => {
    return {
      source: globalCache.metadata!.effectTimingMoveCardEventSources[0].code,
      from: globalCache.metadata!.zoneNames[0].code,
      to: globalCache.metadata!.zoneNames[0].code,
    };
  };
