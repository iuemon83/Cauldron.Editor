import { CardSetCondition } from "./CardSetCondition";
import { CardTypeCondition } from "./CardTypeCondition";
import { NumCondition } from "./NumCondition";
import { OutZoneCondition, outZoneConditionEmpty } from "./OutZoneCondition";
import { TextCondition } from "./TextCondition";
import { CardAnnotationCondition } from "./CardAnnotationCondition";

export type CardDefCondition = {
  outZoneCondition: OutZoneCondition;
  costCondition: NumCondition | undefined;
  powerCondition: NumCondition | undefined;
  toughnessCondition: NumCondition | undefined;
  cardSetCondition: CardSetCondition | undefined;
  nameCondition: TextCondition | undefined;
  typeCondition: CardTypeCondition | undefined;
  annotationCondition: CardAnnotationCondition | undefined;
};

export const cardDefConditionEmpty = (): CardDefCondition => {
  return {
    outZoneCondition: outZoneConditionEmpty(),
    costCondition: undefined,
    powerCondition: undefined,
    toughnessCondition: undefined,
    cardSetCondition: undefined,
    nameCondition: undefined,
    typeCondition: undefined,
    annotationCondition: undefined,
  };
};
