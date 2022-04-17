type CardMetadataElm = {
  code: string;
  displayText: string;
};

export type CardType = CardMetadataElm;
export type CardAbility = CardMetadataElm;
export type CardEffectTimingDamageAfterDamageType = CardMetadataElm;
export type CardEffectTimingDamageBeforeDamageType = CardMetadataElm;
export type ChoiceHow = CardMetadataElm;
export type NumConditionCompare = CardMetadataElm;
export type NumValueCalculatorEventContext = CardMetadataElm;
export type NumValueCalculatorForCardType = CardMetadataElm;
export type NumValueCalculatorForPlayerType = CardMetadataElm;
export type Operator = CardMetadataElm;
export type TextCompare = CardMetadataElm;
export type TextValueCalculatorValueType = CardMetadataElm;
export type ZoneName = CardMetadataElm;
export type OutZoneName = CardMetadataElm;
export type CardConditionContext = CardMetadataElm;
export type CardConditionDamageEventContextCondition = CardMetadataElm;
export type CardConditionBattleEventContextCondition = CardMetadataElm;
export type OwnerConditionValue = CardMetadataElm;
export type PositionTypeValue = CardMetadataElm;
export type PlayerConditionContext = CardMetadataElm;
export type CardSetConditionType = CardMetadataElm;
export type ActionContextCountersOfModifyCounterType = CardMetadataElm;
export type ActionContextCardsOfAddCardType = CardMetadataElm;
export type ActionContextCardsOfAddEffectType = CardMetadataElm;
export type ActionContextCardsOfDamageType = CardMetadataElm;
export type ActionContextCardsOfDestroyCardType = CardMetadataElm;
export type ActionContextCardsOfDrawCardType = CardMetadataElm;
export type ActionContextCardsOfExcludeCardType = CardMetadataElm;
export type ActionContextCardsOfModifyCardType = CardMetadataElm;
export type ActionContextCardsOfModifyCounterType = CardMetadataElm;
export type ActionContextCardsOfMoveCardType = CardMetadataElm;
export type CreatureAbilityModifierOperator = CardMetadataElm;
export type AnnotationsModifierOperator = CardMetadataElm;

export type CardMetaData = {
  cardTypes: CardType[];
  cardAbilities: CardAbility[];
  effectTimingDamageAfterDamageTypes: CardEffectTimingDamageAfterDamageType[];
  effectTimingDamageBeforeDamageTypes: CardEffectTimingDamageBeforeDamageType[];
  choiceHowList: ChoiceHow[];
  choiceSourceHowList: ChoiceHow[];
  numConditionCompares: NumConditionCompare[];
  numValueCalculatorEventContexts: NumValueCalculatorEventContext[];
  numValueCalculatorForCardTypes: NumValueCalculatorForCardType[];
  numValueCalculatorForPlayerTypes: NumValueCalculatorForPlayerType[];
  numValueModifierOperators: Operator[];
  textConditionCompares: TextCompare[];
  textValueCalculatorValueTypes: TextValueCalculatorValueType[];
  zoneNames: ZoneName[];
  outZoneNames: OutZoneName[];
  cardConditionContexts: CardConditionContext[];
  cardConditionDamageEventContextConditions: CardConditionDamageEventContextCondition[];
  cardConditionBattleEventContextConditions: CardConditionBattleEventContextCondition[];
  ownerConditionValues: OwnerConditionValue[];
  positionTypeValues: PositionTypeValue[];
  playerConditionContexts: PlayerConditionContext[];
  cardSetConditionTypes: CardSetConditionType[];
  actionContextCountersOfModifyCounterTypes: CardSetConditionType[];
  actionContextCardsOfAddCardTypes: ActionContextCardsOfAddCardType[];
  actionContextCardsOfAddEffectTypes: ActionContextCardsOfAddEffectType[];
  actionContextCardsOfDamageTypes: ActionContextCardsOfDamageType[];
  actionContextCardsOfDestroyCardTypes: ActionContextCardsOfDestroyCardType[];
  actionContextCardsOfDrawCardTypes: ActionContextCardsOfDrawCardType[];
  actionContextCardsOfExcludeCardTypes: ActionContextCardsOfExcludeCardType[];
  actionContextCardsOfModifyCardTypes: ActionContextCardsOfModifyCardType[];
  actionContextCardsOfModifyCounterTypes: ActionContextCardsOfModifyCounterType[];
  actionContextCardsOfMoveCardTypes: ActionContextCardsOfMoveCardType[];
  creatureAbilityModifierOperators: CreatureAbilityModifierOperator[];
  annotationsModifierOperators: AnnotationsModifierOperator[];
};
