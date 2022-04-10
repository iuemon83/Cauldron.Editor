import InputNumber from "./InputNumber";
import { FormControlLabel, Checkbox, FormControl } from "@mui/material";

interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
}

const InputNumberOption: React.FC<Props> = ({ label, detail, keyName, onChanged }) => {
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={detail[keyName] !== undefined}
            onChange={(e) =>
              onChanged({
                [keyName]: e.target.checked ? 0 : undefined,
              })
            }
          />
        }
        label={label}
      />
      {detail[keyName] !== undefined && <InputNumber label="" detail={detail} keyName={keyName} onChanged={onChanged} />}
    </FormControl>
  );
};

export default InputNumberOption;
