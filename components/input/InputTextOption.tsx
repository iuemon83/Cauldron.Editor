import InputText from "./InputText";
import { FormControlLabel, Checkbox, FormControl } from "@mui/material";

interface Props<T, U extends keyof T> {
  label: string;
  model: T;
  keyName: U;
  onChanged: (e: any) => void;
}

const InputTextOption = <T extends {}, U extends keyof T>({ label, model, keyName, onChanged }: Props<T, U>) => {
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={model[keyName] !== undefined}
            onChange={(e) =>
              onChanged({
                [keyName]: e.target.checked ? "" : undefined,
              })
            }
          />
        }
        label={label}
      />
      {model[keyName] !== undefined && <InputText label="" model={model} keyName={keyName} onChanged={onChanged} />}
    </FormControl>
  );
};

export default InputTextOption;
