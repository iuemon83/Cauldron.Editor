import { CardEffectWhile } from "../types/CardEffectWhile";
import CardEffectTimingForm from "./CardEffectTimingForm";
import InputNumber from "./input/InputNumber";

interface Props {
  model: CardEffectWhile;
  onChanged: (newValue: Partial<CardEffectWhile>) => void;
}

const CardEffectWhileForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <CardEffectTimingForm
        model={model.timing}
        onChanged={(x) => onChanged({ timing: { ...model.timing, ...x } })}
      ></CardEffectTimingForm>
      <InputNumber label="skip" keyName="skip" model={model} onChanged={onChanged} />
      <InputNumber label="take" keyName="take" model={model} onChanged={onChanged} />
    </>
  );
};

export default CardEffectWhileForm;
