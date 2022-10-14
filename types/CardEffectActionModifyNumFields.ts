import { Choice, choiceEmpty } from "./Choice";
import { NumValue, numValueEmpty } from "./NumValue";

export type CardEffectActionModifyNumFields = {
  choicePlayers: Choice;
  diffNum: NumValue;
  name: string | undefined;
};

export const CardEffectActionModifyNumFieldsEmpty = (): CardEffectActionModifyNumFields => {
  return {
    choicePlayers: choiceEmpty(),
    diffNum: numValueEmpty(),
    name: undefined,
  };
};
