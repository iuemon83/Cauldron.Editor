import { ConditionAnd } from "./ConditionAnd";
import { ConditionOr } from "./ConditionOr";
import { ConditionNot } from "./ConditionNot";
import { NumCondition } from "./NumCondition";
import { TextCondition } from "./TextCondition";
import { PlayerCondition } from "./PlayerCondition";

export type ConditionWrap = {
  conditionAnd: ConditionAnd | undefined;
  conditionOr: ConditionOr | undefined;
  conditionNot: ConditionNot | undefined;
  numCondition: NumCondition | undefined;
  textCondition: TextCondition | undefined;
  playerExistsCondition: PlayerCondition | undefined;
};

export const conditionWrapEmpty = (): ConditionWrap => {
  return {
    conditionAnd: undefined,
    conditionOr: undefined,
    conditionNot: undefined,
    numCondition: undefined,
    textCondition: undefined,
    playerExistsCondition: undefined,
  };
};
