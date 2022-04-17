import { TextField } from "@mui/material";
import { AnnotationsModifier } from "../types/AnnotationsModifier";
import { globalCache } from "./CauldronApi";
import InputList from "./input/InputList";
import InputSelect from "./input/InputSelect";

interface Props {
  model: AnnotationsModifier;
  onChanged: (model: Partial<AnnotationsModifier>) => void;
}

const AnnotationsModifierForm: React.FC<Props> = ({ model, onChanged }) => {
  const operatorsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.annotationsModifierOperators.map((v) => [v.code, v.displayText])
  );
  const operators = Object.keys(operatorsLabelsByValue);

  return (
    <>
      <InputSelect
        label="演算子"
        values={operators}
        model={model}
        keyName={"operator"}
        getLabel={(v) => operatorsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputList
        label="アノテーション"
        model={model}
        keyName="value"
        newItem={() => ""}
        onChanged={onChanged}
        jtx={(item, onItemChanged, index) => (
          <TextField
            value={model.value[index]}
            onChange={(e) => {
              const newlist = [...model.value];
              newlist[index] = e.target.value;
              onChanged({ value: newlist });
            }}
          />
        )}
      />
    </>
  );
};
export default AnnotationsModifierForm;
