import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

interface Props<T, U extends keyof T> {
  label: string;
  values: T[U][];
  detail: T;
  keyName: U;
  getLabel: (value: T[U]) => string;
  onChanged: (e: any) => void;
}

const InputSelect = <T extends {}, U extends keyof T>(p: Props<T, U>) => {
  return (
    <FormControl>
      <InputLabel>{p.label}</InputLabel>
      <Select
        value={p.values.indexOf(p.detail[p.keyName])}
        onChange={(e) =>
          p.onChanged({
            [p.keyName]: p.values[Number(e.target.value)],
          })
        }
      >
        {p.values.map((e, index) => (
          <MenuItem key={index} value={index}>
            {p.getLabel(e)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
