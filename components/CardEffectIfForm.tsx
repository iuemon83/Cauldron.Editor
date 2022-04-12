import { CardEffectIf } from "../types/CardEffectIf";
import FormSet from "./input/FormSet";
import NumConditionForm from "./NumConditionForm";
import NumValueForm from "./NumValueForm";

interface Props {
  model: CardEffectIf;
  onChanged: (newValue: Partial<CardEffectIf>) => void;
}

const CardEffectIfForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <NumConditionForm
        model={model.numCondition}
        onChanged={(x) => onChanged({ numCondition: { ...model.numCondition, ...x } })}
      ></NumConditionForm>
      <FormSet label="比較値">
        <NumValueForm
          model={model.numValue}
          onChanged={(x) => onChanged({ numValue: { ...model.numValue, ...x } })}
        ></NumValueForm>
      </FormSet>
    </>
  );
};

export default CardEffectIfForm;
