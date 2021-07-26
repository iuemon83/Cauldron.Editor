import { globalCache } from "../components/CauldronApi";
import { CardConditionContext, OwnerConditionValue } from "./CardMetaData";
import { CardSetConditionDetail } from "./CardSetConditionDetail";
import { CardTypeConditionDetail } from "./CardTypeConditionDetail";
import { NumConditionDetail } from "./NumConditionDetail";
import { TextConditionDetail } from "./TextConditionDetail";
import { ZoneConditionDetail } from "./ZoneConditionDetail";

export type CardConditionDetail = {
  contextCondition: CardConditionContext["code"];
  cardSetCondition: CardSetConditionDetail | undefined;
  costCondition: NumConditionDetail | undefined;
  nameCondition: TextConditionDetail | undefined;
  typeCondition: CardTypeConditionDetail | undefined;
  powerCondition: NumConditionDetail | undefined;
  toughnessCondition: NumConditionDetail | undefined;
  zoneCondition: ZoneConditionDetail | undefined;
  ownerCondition: OwnerConditionValue["code"];
};

export const cardConditionEmpty = (): CardConditionDetail => {
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
