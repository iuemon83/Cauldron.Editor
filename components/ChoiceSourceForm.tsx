import { ChoiceSource } from "../types/ChoiceSource";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

import OrPlayerConditionListForm from "./OrPlayerConditionListForm";
import OrCardConditionListForm from "./OrCardConditionListForm";
import CardDefConditionForm from "./CardDefConditionForm";
import FormSet from "./input/FormSet";
import NumValueForm from "./NumValueForm";
import InputList from "./input/InputList";
import { cardDefConditionEmpty } from "../types/CardDefCondition";

interface Props {
  model: ChoiceSource;
  onChanged: (model: Partial<ChoiceSource>) => void;
}

const ChoiceSourceForm: React.FC<Props> = ({ model, onChanged }) => {
  console.log(model);

  const howListLabelsByValue = Object.fromEntries(globalCache.metadata!.choiceSourceHowList.map((v) => [v.code, v.displayText]));
  const howList = Object.keys(howListLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="選択方法"
          values={howList}
          model={model}
          keyName={"how"}
          getLabel={(v) => howListLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      {model.how !== "all" && (
        <FormSet label="対象の数">
          <NumValueForm model={model.numPicks} onChanged={(x) => onChanged({ numPicks: { ...model.numPicks, ...x } })} />
        </FormSet>
      )}
      <OrPlayerConditionListForm model={model} onChanged={onChanged} />
      <OrCardConditionListForm model={model} onChanged={onChanged} />

      <InputList
        label="カード定義の選択条件"
        model={model}
        keyName="orCardDefConditions"
        newItem={cardDefConditionEmpty}
        onChanged={onChanged}
        jtx={(item, onItemChanged) => <CardDefConditionForm model={item} onChanged={onItemChanged} />}
      />
    </>
  );
};

export default ChoiceSourceForm;
