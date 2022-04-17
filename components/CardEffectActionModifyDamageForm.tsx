import { CardEffectActionModifyDamage } from "../types/CardEffectActionModifyDamage";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import NumValueModifierForm from "./NumValueModifierForm";

interface Props {
  model: CardEffectActionModifyDamage;
  onChanged: (newValue: Partial<CardEffectActionModifyDamage>) => void;
}

const CardEffectActionModifyDamageForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="修整方法">
        <NumValueModifierForm
          model={model.value}
          onChanged={(x) =>
            onChanged({
              value: { ...model.value, ...x },
            })
          }
        ></NumValueModifierForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyDamageForm;
