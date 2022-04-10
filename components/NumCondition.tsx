import { NumConditionDetail } from "../types/NumConditionDetail";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";
import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  detail: NumConditionDetail;
  onChanged: (detail: Partial<NumConditionDetail>) => void;
}

const NumCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const numComparesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numConditionCompares.map((v) => [v.code, v.displayText])
  );
  const numCompares = Object.keys(numComparesLabelsByValue);

  return (
    <>
      <div>
        <InputNumber label="値" keyName="value" detail={detail} onChanged={onChanged} />
      </div>
      <div>
        <InputSelect
          label="比較方法"
          values={numCompares}
          detail={detail}
          keyName={"compare"}
          getLabel={(v) => numComparesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <FormControlLabel
          control={<Switch checked={detail.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
    </>
  );
};

export default NumCondition;
