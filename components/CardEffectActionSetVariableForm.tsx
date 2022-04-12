import React from "react";
import { CardEffectActionSetVariable } from "../types/CardEffectActionSetVariable";
import FormSet from "./input/FormSet";
import InputText from "./input/InputText";
import NumValueForm from "./NumValueForm";

interface Props {
  model: CardEffectActionSetVariable;
  onChanged: (newValue: Partial<CardEffectActionSetVariable>) => void;
}

const CardEffectActionSetVariableForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputText label="名前" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="値">
        <NumValueForm model={model.numValue} onChanged={(x) => onChanged({ numValue: { ...model.numValue, ...x } })} />
      </FormSet>
    </>
  );
};

export default CardEffectActionSetVariableForm;
