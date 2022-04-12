import { globalCache } from "../components/CauldronApi";
import { ZoneName } from "./CardMetaData";
import { Choice, choiceEmpty } from "./Choice";
import { InsertCardPosition } from "./InsertCardPosition";

export type CardEffectActionMoveCard = {
  cardsChoice: Choice;
  to: ZoneName["code"];
  insertCardPosition: InsertCardPosition | undefined;
  name: string | undefined;
};

export const cardEffectActionMoveCardEmpty =
  (): CardEffectActionMoveCard => {
    return {
      cardsChoice: choiceEmpty(),
      to: globalCache.metadata!.zoneNames[0].code,
      insertCardPosition: undefined,
      name: undefined,
    };
  };
