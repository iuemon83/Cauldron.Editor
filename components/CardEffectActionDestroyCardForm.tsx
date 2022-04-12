import { CardEffectActionDestroyCard } from "../types/CardEffectActionDestroyCard";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";

interface Props {
  model: CardEffectActionDestroyCard;
  onChanged: (newValue: Partial<CardEffectActionDestroyCard>) => void;
}

const CardEffectActionDestroyCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
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
