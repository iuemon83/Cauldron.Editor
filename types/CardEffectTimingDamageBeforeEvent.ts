import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import {
  CardEffectTimingDamageBeforeDamageType,
  CardEffectTimingDamageBeforeEventSource,
} from "./CardMetaData";
import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingDamageBeforeEvent = {
  type: CardEffectTimingDamageBeforeDamageType["code"];
  source: CardEffectTimingDamageBeforeEventSource["code"];
  playerCondition: PlayerCondition | undefined;
  cardCondition: CardCondition | undefined;
};

export const cardEffectTimingDamageBeforeEventEmpty =
  (): CardEffectTimingDamageBeforeEvent => {
    return {
      type: globalCache.metadata!.effectTimingDamageBeforeDamageTypes[0].code,
      source:
        globalCache.metadata!.effectTimingDamageBeforeEventSources[0].code,
      playerCondition: undefined,
      cardCondition: undefined,
    };
  };
