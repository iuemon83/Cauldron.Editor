import { globalCache } from "../components/CauldronApi";
import { CardConditionContext, OwnerConditionValue } from "./CardMetaData";
import { CardSetCondition } from "./CardSetCondition";
import { CardTypeCondition } from "./CardTypeCondition";
import { NumCondition } from "./NumCondition";
import { TextCondition } from "./TextCondition";
import { ZoneCondition } from "./ZoneCondition";

export type CardCondition = {
  contextCondition: CardConditionContext["code"];
  cardSetCondition: CardSetCondition | undefined;
  costCondition: NumCondition | undefined;
  nameCondition: TextCondition | undefined;
  typeCondition: CardTypeCondition | undefined;
  powerCondition: NumCondition | undefined;
  toughnessCondition: NumCondition | undefined;
  zoneCondition: ZoneCondition | undefined;
  ownerCondition: OwnerConditionValue["code"];
};

export const cardConditionEmpty = (): CardCondition => {
  return {
    contextCondition: globalCache.metadata!.cardConditionContexts[0].code,
    cardSetCondition: undefined,
    costCondition: undefined,
    nameCondition: undefined,
    powerCondition: undefined,
    toughnessCondition: undefined,
    typeCondition: undefined,
    zoneCondition: undefined,
    ownerCondition: globalCache.metadata!.ownerConditionValues[0].code,
  };
};
