import { globalCache } from "../components/CauldronApi";
import { PositionTypeValue } from "./CardMetaData";

export type InsertCardPosition = {
  positionType: PositionTypeValue["code"];
  positionIndex: number;
};

export const InsertCardPositionEmpty = (): InsertCardPosition => {
  return {
    positionType: globalCache.metadata!.positionTypeValues[0].code,
    positionIndex: 1,
  };
};
