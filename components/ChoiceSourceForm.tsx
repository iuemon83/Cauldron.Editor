import { ChoiceSource } from "../types/ChoiceSource";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

import OrPlayerConditionListForm from "./OrPlayerConditionListForm";
import OrCardConditionListForm from "./OrCardConditionListForm";
import FormSet from "./input/FormSet";
import NumValueForm from "./NumValueForm";

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
      <FormSet label="対象の数">
        <NumValueForm model={model.numPicks} onChanged={(x) => onChanged({ numPicks: { ...model.numPicks, ...x } })} />
      </FormSet>
      <OrPlayerConditionListForm model={model} onChanged={onChanged} />
      <OrCardConditionListForm model={model} onChanged={onChanged} />
    </>
  );
};

export default ChoiceSourceForm;
