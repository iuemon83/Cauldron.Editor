import { CardType, CardAbility } from "./CardMetaData";
import { globalCache } from "../components/CauldronApi";
import { CardEffect } from "./CardEffect";

export type Card = {
  cost: number;
  name: string;
  flavorText: string;
  type: CardType["code"];
  power: number;
  toughness: number;
  isToken: boolean;
  abilities: CardAbility["code"][];
  effects: CardEffect[];
  numTurnsToCanAttack: number | undefined;
  numAttacksLimitInTurn: number | undefined;
};

export const cardEmpty = (): Card => {
  return {
    cost: 0,
    name: "",
    flavorText: "",
    type: globalCache.metadata!.cardTypes[0].code,
    power: 0,
    toughness: 0,
    isToken: false,
    abilities: [],
    effects: [],
    numAttacksLimitInTurn: undefined,
    numTurnsToCanAttack: undefined,
  };
};
