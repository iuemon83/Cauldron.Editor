import InputNumber from "./InputNumber";
import { FormControlLabel, Checkbox, FormControl } from "@mui/material";

interface Props {
  label: string;
  model: any;
  keyName: string;
  onChanged: (e: any) => void;
}

const InputNumberOption: React.FC<Props> = ({ label, model, keyName, onChanged }) => {
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={model[keyName] !== undefined}
            onChange={(e) =>
              onChanged({
                [keyName]: e.target.checked ? 0 : undefined,
              })
            }
          />
        }
        label={label}
      />
      {model[keyName] !== undefined && <InputNumber label="" model={model} keyName={keyName} onChanged={onChanged} />}
    </FormControl>
  );
};

export default InputNumberOption;
