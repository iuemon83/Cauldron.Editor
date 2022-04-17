import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import {
  CardEffectTimingDamageAfterDamageType,
} from "./CardMetaData";
import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingDamageAfterEvent = {
  type: CardEffectTimingDamageAfterDamageType;
  sourceCardCondition: CardCondition | undefined;
  takePlayerCondition: PlayerCondition | undefined;
  takeCardCondition: CardCondition | undefined;
};

export const EventEmpty = (): CardEffectTimingDamageAfterEvent => {
  return {
    type: globalCache.metadata!.effectTimingDamageAfterDamageTypes[0],
    sourceCardCondition: undefined,
    takePlayerCondition: undefined,
    takeCardCondition: undefined,
  };
};
