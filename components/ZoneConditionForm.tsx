import { ZoneCondition } from "../types/ZoneCondition";
import ZoneValueForm from "./ZoneValueForm";
import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  model: ZoneCondition;
  onChanged: (model: Partial<ZoneCondition>) => void;
}

const ZoneConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <div>
        <FormControlLabel
          control={<Switch checked={model.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
      <ZoneValueForm
        model={model.value}
        onChanged={(x) =>
          onChanged({
            value: { ...model.value, ...x },
          })
        }
      ></ZoneValueForm>
    </>
  );
};

export default ZoneConditionForm;
