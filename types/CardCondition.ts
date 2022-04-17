import { globalCache } from "../components/CauldronApi";
import {
  CardAbility,
  CardConditionBattleEventContextCondition,
  CardConditionContext,
  CardConditionDamageEventContextCondition,
  OwnerConditionValue,
} from "./CardMetaData";
import { CardSetCondition } from "./CardSetCondition";
import { CardTypeCondition } from "./CardTypeCondition";
import { NumCondition } from "./NumCondition";
import { TextCondition } from "./TextCondition";
import { ZoneCondition } from "./ZoneCondition";
import { CounterCondition } from "./CounterCondition";
import { CardAnnotationCondition } from "./CardAnnotationCondition";
import { ActionContextCards } from "./ActionContextCards";

export type CardCondition = {
  contextCondition: CardConditionContext["code"];
  actionContext: ActionContextCards | undefined;
  battleEventContextCondition: CardConditionBattleEventContextCondition["code"];
  damageEventContextCondition: CardConditionDamageEventContextCondition["code"];
  costCondition: NumCondition | undefined;
  powerCondition: NumCondition | undefined;
  toughnessCondition: NumCondition | undefined;
  cardSetCondition: CardSetCondition | undefined;
  nameCondition: TextCondition | undefined;
  annotationCondition: CardAnnotationCondition | undefined;
  typeCondition: CardTypeCondition | undefined;
  zoneCondition: ZoneCondition | undefined;
  ownerCondition: OwnerConditionValue["code"];
  abilityCondition: CardAbility["code"];
  counterCondition: CounterCondition | undefined;
};

export const cardConditionEmpty = (): CardCondition => {
  return {
    contextCondition: globalCache.metadata!.cardConditionContexts[0].code,
    actionContext: undefined,
    battleEventContextCondition: globalCache.metadata!.cardConditionDamageEventContextConditions[0].code,
    damageEventContextCondition: globalCache.metadata!.cardConditionBattleEventContextConditions[0].code,
    costCondition: undefined,
    powerCondition: undefined,
    toughnessCondition: undefined,
    cardSetCondition: undefined,
    nameCondition: undefined,
    annotationCondition: undefined,
    typeCondition: undefined,
    zoneCondition: undefined,
    ownerCondition: globalCache.metadata!.ownerConditionValues[0].code,
    abilityCondition: globalCache.metadata!.cardAbilities[0].code,
    counterCondition: undefined,
  };
};
