import { globalCache } from "../components/CauldronApi";
import { CardEffectIf } from "./CardEffectIf";
import { CardEffectWhen } from "./CardEffectWhen";
import { CardEffectWhile } from "./CardEffectWhile";
import { ZoneName } from "./CardMetaData";

export type CardEffectConditionAsNotPlay = {
  zone: ZoneName["code"];
  when: CardEffectWhen | undefined;
  while: CardEffectWhile | undefined;
  if: CardEffectIf | undefined;
};

export const CardEffectConditionAsNotPlayEmpty = (): CardEffectConditionAsNotPlay => {
  return {
    zone: globalCache.metadata!.zoneNames[0].code,
    when: undefined,
    while: undefined,
    if: undefined,
  };
};
