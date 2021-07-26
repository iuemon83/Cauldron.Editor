import { globalCache } from "../components/CauldronApi";
import { PositionTypeValue } from "./CardMetaData";

export type InsertCardPositionDetail = {
  positionType: PositionTypeValue["code"];
  positionIndex: number;
};

export const InsertCardPositionEmpty = (): InsertCardPositionDetail => {
  return {
    positionType: globalCache.metadata!.positionTypeValues[0].code,
    positionIndex: 1,
  };
};
