import React from "react";
import { cardEffectActionEmpty } from "../types/CardEffectAction";
import { CardEffectCondition } from "../types/CardEffectCondition";
import { CardEffect } from "../types/CardEffect";
import CardEffectActionForm from "./CardEffectActionForm";
import CardEffectConditionForm from "./CardEffectConditionForm";
import FormSet from "./input/FormSet";
import InputList from "./input/InputList";
import InputText from "./input/InputText";
import { TextField } from "@mui/material";

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
      <div>
        <TextField
          label="効果の説明"
          multiline
          value={model.description}
          onChange={(e) => onChanged({ description: e.target.value })}
          sx={{ width: "40ch" }}
        />
      </div>
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
