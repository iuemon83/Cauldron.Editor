import { NumValueCalculatorForCounter } from "../types/NumValueCalculatorForCounter";
import ChoiceForm from "./ChoiceForm";
import ActionContextCountersForm from "./ActionContextCountersForm";
import FormSet from "./input/FormSet";
import InputText from "./input/InputText";
import InputOption from "./input/InputOption";
import { actionContextCountersEmpty } from "../types/ActionContextCounters";

interface Props {
  model: NumValueCalculatorForCounter;
  onChanged: (newValue: Partial<NumValueCalculatorForCounter>) => void;
}

const NumValueCalculatorForCounterForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <div>
        <InputText label="カウンターの名前" model={model} keyName="counterName" onChanged={onChanged} />
      </div>
      <FormSet label="カードの選択条件">
        <ChoiceForm
          model={model.cardsChoice}
          onChanged={(x) => onChanged({ cardsChoice: { ...model.cardsChoice, ...x } })}
        ></ChoiceForm>
      </FormSet>
      <div>
        <InputOption
          label="カウンター"
          model={model}
          keyName="actionContextCounters"
          empty={actionContextCountersEmpty}
          onChanged={onChanged}
          jtx={(d, h) => <ActionContextCountersForm model={d!} onChanged={h} />}
        />
      </div>
    </>
  );
};
export default NumValueCalculatorForCounterForm;
