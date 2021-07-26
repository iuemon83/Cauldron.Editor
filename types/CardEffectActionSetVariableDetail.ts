import { NumValueDetail, numValueEmpty } from "./NumValueDetail";

export type CardEffectActionSetVariableDetail = {
  name: string;
  numValue: NumValueDetail;
};

export const CardEffectActionSetVariableEmpty =
  (): CardEffectActionSetVariableDetail => {
    return {
      name: "",
      numValue: numValueEmpty(),
    };
  };
