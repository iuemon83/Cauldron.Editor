import { Choice, choiceEmpty } from "./Choice";
import { InsertCardPosition } from "./InsertCardPosition";
import { ZoneValue, zoneValueEmpty } from "./ZoneValue";

export type CardEffectActionAddCard = {
  choice: Choice;
  zoneToAddCard: ZoneValue;
  insertCardPosition: InsertCardPosition | undefined;
  numOfAddCards: number;
  name: string | undefined;
};

export const CardEffectActionAddCardEmpty = (): CardEffectActionAddCard => {
  return {
    choice: choiceEmpty(),
    zoneToAddCard: zoneValueEmpty(),
    insertCardPosition: undefined,
    numOfAddCards: 1,
    name: undefined,
  };
};
