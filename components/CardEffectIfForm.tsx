import { CardEffectIf } from "../types/CardEffectIf";
import ConditionWrapForm from "./ConditionWrapForm";

interface Props {
  model: CardEffectIf;
  onChanged: (newValue: Partial<CardEffectIf>) => void;
}

const CardEffectIfForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <ConditionWrapForm model={model.condition} onChanged={(x) => onChanged({ condition: { ...model.condition, ...x } })} />
    </>
  );
};

export default CardEffectIfForm;
