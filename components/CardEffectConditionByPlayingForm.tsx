import { CardEffectConditionByPlaying } from "../types/CardEffectConditionByPlaying";
import { CardEffectIfEmpty } from "../types/CardEffectIf";
import CardEffectIfForm from "./CardEffectIfForm";
import InputOption from "./input/InputOption";

interface Props {
  model: CardEffectConditionByPlaying;
  onChanged: (newValue: Partial<CardEffectConditionByPlaying>) => void;
}

const CardEffectConditionByPlayingForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="もし"
        model={model}
        keyName="if"
        empty={CardEffectIfEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectIfForm model={d!} onChanged={h}></CardEffectIfForm>}
      />
    </>
  );
};

export default CardEffectConditionByPlayingForm;
