import { CardEffectActionDamage } from "../types/CardEffectActionDamage";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import NumValueForm from "./NumValueForm";

interface Props {
  model: CardEffectActionDamage;
  onChanged: (newValue: Partial<CardEffectActionDamage>) => void;
}

const CardEffectActionDamageForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="ダメージ値">
        <NumValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })} />
      </FormSet>
      <FormSet label="ダメージを与える対象の選択条件">
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

export default CardEffectActionDamageForm;
