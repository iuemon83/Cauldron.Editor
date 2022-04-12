import { TextCondition } from "../types/TextCondition";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import TextValueForm from "./TextValueForm";
import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  model: TextCondition;
  onChanged: (model: Partial<TextCondition>) => void;
}

const TextConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const textComparesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.textConditionCompares.map((v) => [v.code, v.displayText])
  );
  const textCompares = Object.keys(textComparesLabelsByValue);

  return (
    <>
      <TextValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })}></TextValueForm>
      <InputSelect
        label="比較方法"
        values={textCompares}
        model={model}
        keyName={"compare"}
        getLabel={(v) => textComparesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <div>
        <FormControlLabel
          control={<Switch checked={model.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
    </>
  );
};

export default TextConditionForm;
