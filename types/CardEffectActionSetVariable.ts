import { NumValue, numValueEmpty } from "./NumValue";

export type CardEffectActionSetVariable = {
  name: string;
  numValue: NumValue;
};

export const CardEffectActionSetVariableEmpty =
  (): CardEffectActionSetVariable => {
    return {
      name: "",
      numValue: numValueEmpty(),
    };
  };
