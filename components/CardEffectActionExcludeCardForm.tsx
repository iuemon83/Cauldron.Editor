import React from "react";
import { CardEffectActionExcludeCard } from "../types/CardEffectActionExcludeCard";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";

interface Props {
  model: CardEffectActionExcludeCard;
  onChanged: (newValue: Partial<CardEffectActionExcludeCard>) => void;
}

const CardEffectActionExcludeCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="除外するカードの選択条件">
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

export default CardEffectActionExcludeCardForm;
