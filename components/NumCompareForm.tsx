import { NumCompare } from "../types/NumCompare";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import NumValueForm from "./NumValueForm";

interface Props {
  model: NumCompare;
  onChanged: (model: Partial<NumCompare>) => void;
}

const NumCompareForm: React.FC<Props> = ({ model, onChanged }) => {
  const numComparesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numConditionCompares.map((v) => [v.code, v.displayText])
  );
  const numCompares = Object.keys(numComparesLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="比較方法"
          values={numCompares}
          model={model}
          keyName={"compare"}
          getLabel={(v) => numComparesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <NumValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })}></NumValueForm>
      </div>
    </>
  );
};

export default NumCompareForm;
