import { NumCondition } from "../types/NumCondition";
import { FormControlLabel, Switch } from "@mui/material";
import NumValueForm from "./NumValueForm";
import NumCompareForm from "./NumCompareForm";

interface Props {
  model: NumCondition;
  onChanged: (model: Partial<NumCondition>) => void;
}

const NumConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <div>
        <NumValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })} />
      </div>
      <div>
        <NumCompareForm model={model.compare} onChanged={(x) => onChanged({ compare: { ...model.compare, ...x } })} />
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

export default NumConditionForm;
