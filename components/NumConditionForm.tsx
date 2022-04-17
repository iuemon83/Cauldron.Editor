import { NumCondition } from "../types/NumCondition";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import { FormControlLabel, Switch } from "@mui/material";
import NumValueForm from "./NumValueForm";

interface Props {
  model: NumCondition;
  onChanged: (model: Partial<NumCondition>) => void;
}

const NumConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const numComparesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numConditionCompares.map((v) => [v.code, v.displayText])
  );
  const numCompares = Object.keys(numComparesLabelsByValue);

  return (
    <>
      <div>
        <NumValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })}></NumValueForm>
      </div>
      <div>
        <InputSelect
          label="比較方法"
          values={numCompares}
          model={model}
          keyName={"compare"}
          getLabel={(v) => numComparesLabelsByValue[v]}
          onChanged={onChanged}
        />
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
