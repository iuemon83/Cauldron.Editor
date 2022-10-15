import { CardEffectActionModifyNumFields } from "../types/CardEffectActionModifyNumFields";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import React from "react";
import NumValueModifierForm from "./NumValueModifierForm";

interface Props {
  model: CardEffectActionModifyNumFields;
  onChanged: (newValue: Partial<CardEffectActionModifyNumFields>) => void;
}

const CardEffectActionModifyNumFieldsForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="対象のプレイヤーの選択条件">
        <ChoiceForm
          model={model.choicePlayers}
          onChanged={(x) =>
            onChanged({
              choicePlayers: { ...model.choicePlayers, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
      <FormSet label="場の数の変化量">
        <NumValueModifierForm model={model.diffNum} onChanged={(x) => onChanged({ diffNum: { ...model.diffNum, ...x } })} />
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyNumFieldsForm;
