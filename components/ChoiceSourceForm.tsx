import { ChoiceSource } from "../types/ChoiceSource";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

import OrPlayerConditionListForm from "./OrPlayerConditionListForm";
import OrCardConditionListForm from "./OrCardConditionListForm";

interface Props {
  model: ChoiceSource;
  onChanged: (model: Partial<ChoiceSource>) => void;
}

const ChoiceSourceForm: React.FC<Props> = ({ model, onChanged }) => {
  const howListLabelsByValue = Object.fromEntries(globalCache.metadata!.choiceHowList.map((v) => [v.code, v.displayText]));
  const howList = Object.keys(howListLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="選択方式"
          values={howList}
          model={model}
          keyName={"how"}
          getLabel={(v) => howListLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber label="対象の数" keyName="numPicks" model={model} onChanged={onChanged} />
      </div>
      <OrPlayerConditionListForm model={model} onChanged={onChanged} />
      <OrCardConditionListForm model={model} onChanged={onChanged} />
    </>
  );
};

export default ChoiceSourceForm;
