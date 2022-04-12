import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import {
  CardEffectTimingDamageAfterDamageType,
  CardEffectTimingDamageAfterEventSource,
} from "./CardMetaData";
import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingDamageAfterEvent = {
  type: CardEffectTimingDamageAfterDamageType;
  source: CardEffectTimingDamageAfterEventSource;
  playerCondition: PlayerCondition | undefined;
  cardCondition: CardCondition | undefined;
};

export const EventEmpty = (): CardEffectTimingDamageAfterEvent => {
  return {
    type: globalCache.metadata!.effectTimingDamageAfterDamageTypes[0],
    source: globalCache.metadata!.effectTimingDamageAfterEventSources[0],
    playerCondition: undefined,
    cardCondition: undefined,
  };
};
