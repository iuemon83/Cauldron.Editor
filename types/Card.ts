import { CardType, CardAbility } from "./CardMetaData";
import { globalCache } from "../components/CauldronApi";
import { CardEffect } from "./CardEffect";

export type Card = {
  cost: number;
  name: string;
  flavorText: string;
  annotations: string[];
  type: CardType["code"];
  power: number;
  toughness: number;
  isToken: boolean;
  abilities: CardAbility["code"][];
  effects: CardEffect[];
  numTurnsToCanAttackToCreature: number | undefined;
  numTurnsToCanAttackToPlayer: number | undefined;
  numAttacksLimitInTurn: number | undefined;
  limitNumCardsInDeck: number | undefined;
};

export const cardEmpty = (): Card => {
  return {
    cost: 0,
    name: "",
    flavorText: "",
    annotations: [],
    type: globalCache.metadata!.cardTypes[0].code,
    power: 0,
    toughness: 0,
    isToken: false,
    abilities: [],
    effects: [],
    numAttacksLimitInTurn: undefined,
    numTurnsToCanAttackToCreature: undefined,
    numTurnsToCanAttackToPlayer: undefined,
    limitNumCardsInDeck: undefined,
  };
};
