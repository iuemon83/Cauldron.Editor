import { Choice } from "../types/Choice";
import { globalCache } from "./CauldronApi";
import ChoiceSourceForm from "./ChoiceSourceForm";
import FormSet from "./input/FormSet";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

interface Props {
  model: Choice;
  onChanged: (model: Partial<Choice>) => void;
}

const ChoiceForm: React.FC<Props> = ({ model, onChanged }) => {
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
      <div>
        <FormSet label="選択候補">
          <ChoiceSourceForm model={model.source} onChanged={(e) => onChanged({ source: { ...model.source, ...e } })} />
        </FormSet>
      </div>
    </>
  );
};

export default ChoiceForm;
