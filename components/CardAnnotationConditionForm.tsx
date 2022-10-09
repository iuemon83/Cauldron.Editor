import { CardAnnotationCondition } from "../types/CardAnnotationCondition";
import { FormControlLabel, Switch } from "@mui/material";
import InputText from "./input/InputText";

interface Props {
  model: CardAnnotationCondition;
  onChanged: (model: Partial<CardAnnotationCondition>) => void;
}

const CardAnnotationConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <div>
        <InputText label="タグ" model={model} keyName="value" onChanged={onChanged} />
      </div>
      <div>
        <FormControlLabel
          control={<Switch checked={model.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
    </>
  );
};

export default CardAnnotationConditionForm;
