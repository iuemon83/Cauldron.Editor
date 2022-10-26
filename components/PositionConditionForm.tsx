import { PositionCondition } from "../types/PositionCondition";
import ChoiceForm from "./ChoiceForm";
import InputNumber from "./input/InputNumber";
import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  model: PositionCondition;
  onChanged: (model: Partial<PositionCondition>) => void;
}

const PositionConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <ChoiceForm
        model={model.choiceBaseCard}
        onChanged={(x) => onChanged({ choiceBaseCard: { ...model.choiceBaseCard, ...x } })}
      />
      <InputNumber label="x" keyName="x" model={model} onChanged={onChanged} />
      <InputNumber label="y" keyName="y" model={model} onChanged={onChanged} />
      <div>
        <FormControlLabel
          control={<Switch checked={model.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
    </>
  );
};

export default PositionConditionForm;
