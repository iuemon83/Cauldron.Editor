import { ZoneConditionDetail } from "../types/ZoneConditionDetail";
import ZoneValue from "./ZoneValue";
import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  detail: ZoneConditionDetail;
  onChanged: (detail: Partial<ZoneConditionDetail>) => void;
}

const ZoneCondition: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <FormControlLabel
          control={<Switch checked={detail.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
      <ZoneValue
        detail={detail.value}
        onChanged={(x) =>
          onChanged({
            value: { ...detail.value, ...x },
          })
        }
      ></ZoneValue>
    </>
  );
};

export default ZoneCondition;
