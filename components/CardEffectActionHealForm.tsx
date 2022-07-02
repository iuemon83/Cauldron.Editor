import { CardEffectActionHeal } from "../types/CardEffectActionHeal";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import NumValueForm from "./NumValueForm";

interface Props {
  model: CardEffectActionHeal;
  onChanged: (newValue: Partial<CardEffectActionHeal>) => void;
}

const CardEffectActionHealForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="回復値">
        <NumValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })} />
      </FormSet>
      <FormSet label="回復する対象の選択条件">
        <ChoiceForm
          model={model.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...model.choice, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionHealForm;
