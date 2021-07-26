import { globalCache } from "../components/CauldronApi";
import { ZoneName } from "./CardMetaData";
import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import { InsertCardPositionDetail } from "./InsertCardPositionDetail";

export type CardEffectActionMoveCardDetail = {
  cardsChoice: ChoiceDetail;
  to: ZoneName["code"];
  insertCardPosition: InsertCardPositionDetail | undefined;
  name: string | undefined;
};

export const cardEffectActionMoveCardEmpty =
  (): CardEffectActionMoveCardDetail => {
    return {
      cardsChoice: choiceEmpty(),
      to: globalCache.metadata!.zoneNames[0].code,
      insertCardPosition: undefined,
      name: undefined,
    };
  };
