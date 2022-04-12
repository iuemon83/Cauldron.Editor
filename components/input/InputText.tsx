import { TextField } from "@mui/material";

interface Props<T, U extends keyof T> {
  label: string;
  model: T;
  keyName: U;
  onChanged: (e: any) => void;
}

const InputText = <T extends {}, U extends keyof T>(p: Props<T, U>) => {
  return <TextField label={p.label} value={p.model[p.keyName]} onChange={(e) => p.onChanged({ [p.keyName]: e.target.value })} />;
};

export default InputText;
