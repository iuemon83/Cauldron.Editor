import { TextValueCalculator } from "./TextValueCalculator";

export type TextValue = {
  pureValue: string | undefined;
  textValueCalculator: TextValueCalculator | undefined;
};

export const textValueEmpty = (): TextValue => {
  return {
    pureValue: "",
    textValueCalculator: undefined,
  };
};
