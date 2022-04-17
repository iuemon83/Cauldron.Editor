import { CardEffectActionModifyDamage } from "../types/CardEffectActionModifyDamage";
import FormSet from "./input/FormSet";
import NumValueModifierForm from "./NumValueModifierForm";

interface Props {
  model: CardEffectActionModifyDamage;
  onChanged: (newValue: Partial<CardEffectActionModifyDamage>) => void;
}

const CardEffectActionModifyDamageForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
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
