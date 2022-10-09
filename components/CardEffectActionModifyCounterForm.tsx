import { CardEffectActionModifyCounter } from "../types/CardEffectActionModifyCounter";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import InputText from "./input/InputText";
import NumValueModifierForm from "./NumValueModifierForm";

interface Props {
  model: CardEffectActionModifyCounter;
  onChanged: (newValue: Partial<CardEffectActionModifyCounter>) => void;
}

const CardEffectActionModifyCounterForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <InputText label="カウンターの名前" model={model} keyName="counterName" onChanged={onChanged} />
      <NumValueModifierForm
        model={model.numCountersModifier}
        onChanged={(x) =>
          onChanged({
            numCountersModifier: { ...model.numCountersModifier, ...x },
          })
        }
      />
      <FormSet label="対象の選択条件">
        <ChoiceForm
          model={model.targetsChoice}
          onChanged={(x) =>
            onChanged({
              targetsChoice: { ...model.targetsChoice, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyCounterForm;
