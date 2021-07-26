import { ChoiceDetail, choiceEmpty } from "./ChoiceDetail";
import {
  NumValueModifierDetail,
  numValueModifierEmpty,
} from "./NumValueModifierDetail";

export type CardEffectActionModifyDamageDetail = {
  value: NumValueModifierDetail;
  choice: ChoiceDetail | undefined;
};

export const CardEffectActionModifyDamageEmpty =
  (): CardEffectActionModifyDamageDetail => {
    return {
      value: numValueModifierEmpty(),
      choice: undefined,
    };
  };
