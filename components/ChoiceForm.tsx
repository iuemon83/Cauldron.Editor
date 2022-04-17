import { Choice } from "../types/Choice";
import { globalCache } from "./CauldronApi";
import ChoiceSourceForm from "./ChoiceSourceForm";
import FormSet from "./input/FormSet";
import InputSelect from "./input/InputSelect";
import NumValueForm from "./NumValueForm";

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
          label="選択方法"
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
      <FormSet label="選択できる候補">
        <ChoiceSourceForm model={model.source} onChanged={(e) => onChanged({ source: { ...model.source, ...e } })} />
      </FormSet>
    </>
  );
};

export default ChoiceForm;
