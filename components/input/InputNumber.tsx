import { Theme } from "@emotion/react";
import { SxProps, TextField } from "@mui/material";

interface Props {
  label: string;
  detail: any;
  keyName: string;
  onChanged: (e: any) => void;
  sx?: SxProps<Theme>;
}

const InputNumber: React.FC<Props> = ({ label, detail, keyName, onChanged, sx }) => {
  return (
    <TextField
      label={label}
      type="number"
      value={detail[keyName]}
      onChange={(e) => onChanged({ [keyName]: Number(e.target.value) })}
      sx={sx}
    />
  );
};

export default InputNumber;
