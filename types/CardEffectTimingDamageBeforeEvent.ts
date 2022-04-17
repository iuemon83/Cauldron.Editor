import { globalCache } from "../components/CauldronApi";
import { CardCondition } from "./CardCondition";
import {
  CardEffectTimingDamageBeforeDamageType,
} from "./CardMetaData";
import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingDamageBeforeEvent = {
  type: CardEffectTimingDamageBeforeDamageType["code"];
  sourceCardCondition: CardCondition | undefined;
  takePlayerCondition: PlayerCondition | undefined;
  takeCardCondition: CardCondition | undefined;
};

export const cardEffectTimingDamageBeforeEventEmpty =
  (): CardEffectTimingDamageBeforeEvent => {
    return {
      type: globalCache.metadata!.effectTimingDamageBeforeDamageTypes[0].code,
      sourceCardCondition: undefined,
      takePlayerCondition: undefined,
      takeCardCondition: undefined,
    };
  };
