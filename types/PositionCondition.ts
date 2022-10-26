import { Choice, choiceEmpty } from "./Choice";

export type PositionCondition = {
  choiceBaseCard: Choice;
  x: number;
  y: number;
  not: boolean;
};

export const positionConditionEmpty = (): PositionCondition => {
  return {
    choiceBaseCard: choiceEmpty(),
    x: 0,
    y: 0,
    not: false,
  };
};
