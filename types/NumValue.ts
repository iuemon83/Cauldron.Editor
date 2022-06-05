import { NumValueCalculator } from "./NumValueCalculator";
import { NumValueModifier } from "./NumValueModifier";
import { NumValueVariableCalculator } from "./NumValueVariableCalculator";

export type NumValue = {
  pureValue: number | undefined;
  numValueCalculator: NumValueCalculator | undefined;
  numVariable: NumValueVariableCalculator | undefined;
  numValueModifier: NumValueModifier | undefined;
};

export const numValueEmpty = (): NumValue => {
  return {
    pureValue: 0,
    numValueCalculator: undefined,
    numVariable: undefined,
    numValueModifier: undefined,
  };
};
