import React from "react";
import { cardEffectActionEmpty } from "../types/CardEffectAction";
import { CardEffectCondition } from "../types/CardEffectCondition";
import { CardEffect } from "../types/CardEffect";
import CardEffectActionForm from "./CardEffectActionForm";
import CardEffectConditionForm from "./CardEffectConditionForm";
import FormSet from "./input/FormSet";
import InputList from "./input/InputList";

interface Props {
  model: CardEffect;
  onChanged: (model: Partial<CardEffect>) => void;
}

const CardEffectForm: React.FC<Props> = ({ model, onChanged }) => {
  const handleChangeCardEffectCondition = (x: Partial<CardEffectCondition>) => {
    onChanged({
      ...model,
      condition: { ...model.condition, ...x },
    });
  };

  return (
    <>
      <FormSet label="条件">
        <CardEffectConditionForm model={model.condition} onChanged={handleChangeCardEffectCondition}></CardEffectConditionForm>
      </FormSet>

      <InputList
        model={model}
        keyName="actions"
        label="アクション"
        newItem={() => cardEffectActionEmpty()}
        onChanged={onChanged}
        jtx={(item, onItemChanged) => <CardEffectActionForm model={item} onChanged={onItemChanged}></CardEffectActionForm>}
      />
    </>
  );
};

export default CardEffectForm;
