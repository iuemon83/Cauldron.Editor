import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { InsertCardPositionDetail } from "./InsertCardPositionDetail";
import { ZoneValueDetail, zoneValueEmpty } from "./ZoneValueDetail";

export type CardEffectActionAddCardDetail = {
  choice: ChoiceDetail;
  zoneToAddCard: ZoneValueDetail;
  insertCardPosition: InsertCardPositionDetail | undefined;
  numOfAddCards: number;
};

export const CardEffectActionAddCardEmpty =
  (): CardEffectActionAddCardDetail => {
    return {
      choice: choiceEmpty(),
      zoneToAddCard: zoneValueEmpty(),
      insertCardPosition: undefined,
      numOfAddCards: 1,
    };
  };
