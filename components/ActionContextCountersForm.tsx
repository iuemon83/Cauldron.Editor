import { ActionContextCounters } from "../types/ActionContextCounters";
import { actionContextCountersOfModifyCounterEmpty } from "../types/ActionContextCountersOfModifyCounter";
import ActionContextCountersOfModifyCounterForm from "./ActionContextCountersOfModifyCounterForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";

interface Props {
  model: ActionContextCounters;
  onChanged: (newValue: Partial<ActionContextCounters>) => void;
}

const ActionContextCountersForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueCalculatorForPlayerTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  return (
    <>
      <InputOption
        label="カードセットの条件"
        model={model}
        keyName="ofModifyCounter"
        empty={actionContextCountersOfModifyCounterEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCountersOfModifyCounterForm model={d!} onChanged={h} />}
      />
    </>
  );
};
export default ActionContextCountersForm;
