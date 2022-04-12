import { CardEffectActionModifyDamage } from "../types/CardEffectActionModifyDamage";
import { choiceEmpty } from "../types/Choice";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
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
      <InputOption
        label="対象の選択条件"
        model={model}
        keyName="choice"
        empty={choiceEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ChoiceForm model={d!} onChanged={h}></ChoiceForm>}
      />
    </>
  );
};

export default CardEffectActionModifyDamageForm;
