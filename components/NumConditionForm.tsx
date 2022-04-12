import { NumCondition } from "../types/NumCondition";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";
import { FormControlLabel, Switch } from "@mui/material";

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
        <InputNumber label="値" keyName="value" model={model} onChanged={onChanged} />
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
