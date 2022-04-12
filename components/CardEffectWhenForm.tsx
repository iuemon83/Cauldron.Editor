import { CardEffectWhen } from "../types/CardEffectWhen";
import CardEffectTimingForm from "./CardEffectTimingForm";

interface Props {
  model: CardEffectWhen;
  onChanged: (newValue: Partial<CardEffectWhen>) => void;
}

const CardEffectWhenForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <CardEffectTimingForm
        model={model.timing}
        onChanged={(x) => onChanged({ timing: { ...model.timing, ...x } })}
      ></CardEffectTimingForm>
    </>
  );
};

export default CardEffectWhenForm;
