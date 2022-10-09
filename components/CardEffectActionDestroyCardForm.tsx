import { CardEffectActionDestroyCard } from "../types/CardEffectActionDestroyCard";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";

interface Props {
  model: CardEffectActionDestroyCard;
  onChanged: (newValue: Partial<CardEffectActionDestroyCard>) => void;
}

const CardEffectActionDestroyCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="破壊するカードの選択条件">
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

export default CardEffectActionDestroyCardForm;
