import { Choice, choiceEmpty } from "./Choice";
import { InsertCardPosition } from "./InsertCardPosition";
import { NumValue, numValueEmpty } from "./NumValue";
import { ZoneValue, zoneValueEmpty } from "./ZoneValue";

export type CardEffectActionAddCard = {
  choice: Choice;
  zoneToAddCard: ZoneValue;
  insertCardPosition: InsertCardPosition | undefined;
  numOfAddCards: NumValue;
  name: string | undefined;
};

export const CardEffectActionAddCardEmpty = (): CardEffectActionAddCard => {
  return {
    choice: choiceEmpty(),
    zoneToAddCard: zoneValueEmpty(),
    insertCardPosition: undefined,
    numOfAddCards: numValueEmpty(),
    name: undefined,
  };
};
