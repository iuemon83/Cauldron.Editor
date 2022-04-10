import { TextConditionDetail } from "../types/TextConditionDetail";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import TextValue from "./TextValue";
import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  detail: TextConditionDetail;
  onChanged: (detail: Partial<TextConditionDetail>) => void;
}

const TextCondition: React.FC<Props> = ({ detail, onChanged }) => {
  const textComparesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.textConditionCompares.map((v) => [v.code, v.displayText])
  );
  const textCompares = Object.keys(textComparesLabelsByValue);

  return (
    <>
      <TextValue detail={detail.value} onChanged={(x) => onChanged({ value: { ...detail.value, ...x } })}></TextValue>
      <InputSelect
        label="比較方法"
        values={textCompares}
        detail={detail}
        keyName={"compare"}
        getLabel={(v) => textComparesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <div>
        <FormControlLabel
          control={<Switch checked={detail.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
    </>
  );
};

export default TextCondition;
