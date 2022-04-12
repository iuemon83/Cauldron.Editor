import { globalCache } from "../components/CauldronApi";
import { CardEffectTimingModifyPlayerEventSource } from "./CardMetaData";

export type CardEffectTimingModifyPlayerEvent = {
  source: CardEffectTimingModifyPlayerEventSource;
  modifyMaxHp: boolean;
  modifyHp: boolean;
  modifyMaxMp: boolean;
  modifyMp: boolean;
};

export const CardEffectTimingDamageBeforeEventEmpty =
  (): CardEffectTimingModifyPlayerEvent => {
    return {
      source: globalCache.metadata!.effectTimingDamageBeforeEventSources[0],
      modifyMaxHp: false,
      modifyHp: false,
      modifyMaxMp: false,
      modifyMp: false,
    };
  };
