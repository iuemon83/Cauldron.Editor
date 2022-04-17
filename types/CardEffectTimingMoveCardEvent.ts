import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import { ZoneName } from "./CardMetaData";

export type CardEffectTimingMoveCardEvent = {
  orCardConditions: CardCondition[];
  from: ZoneName["code"];
  to: ZoneName["code"];
};

export const cardEffectTimingMoveCardEventEmpty =
  (): CardEffectTimingMoveCardEvent => {
    return {
      orCardConditions:[],
      from: globalCache.metadata!.zoneNames[0].code,
      to: globalCache.metadata!.zoneNames[0].code,
    };
  };
