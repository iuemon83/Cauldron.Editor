import { ConditionAnd } from "../types/ConditionAnd";
import { conditionWrapEmpty } from "../types/ConditionWrap";
import ConditionWrapForm from "./ConditionWrapForm";
import InputList from "./input/InputList";

interface Props {
  model: ConditionAnd;
  onChanged: (newValue: Partial<ConditionAnd>) => void;
}

const ConditionAndForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputList
        label="and"
        model={model}
        keyName="conditions"
        newItem={conditionWrapEmpty}
        onChanged={onChanged}
        jtx={(item, onItemChanged, index) => <ConditionWrapForm model={item} onChanged={onItemChanged} />}
      />
    </>
  );
};

export default ConditionAndForm;
