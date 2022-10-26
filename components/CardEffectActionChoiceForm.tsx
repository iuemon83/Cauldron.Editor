import { CardEffectActionChoice } from "../types/CardEffectActionChoice";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import React from "react";

interface Props {
  model: CardEffectActionChoice;
  onChanged: (newValue: Partial<CardEffectActionChoice>) => void;
}

const CardEffectActionChoiceForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="ダメージを与える対象の選択条件">
        <ChoiceForm
          model={model.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...model.choice, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionChoiceForm;
