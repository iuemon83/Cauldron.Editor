import { CardEffectCondition } from "../types/CardEffectCondition";
import { CardEffectConditionAsNotPlayEmpty } from "../types/CardEffectConditionAsNotPlay";
import CardEffectConditionAsNotPlayForm from "./CardEffectConditionAsNotPlayForm";
import CardEffectConditionByPlayingForm from "./CardEffectConditionByPlayingForm";
import CardEffectConditionAsReserveForm from "./CardEffectConditionAsReserveForm";
import InputOption from "./input/InputOption";

interface Props {
  model: CardEffectCondition;
  onChanged: (newValue: Partial<CardEffectCondition>) => void;
}

const CardEffectConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="このカードをプレイしたとき"
        model={model}
        keyName="byPlay"
        empty={CardEffectConditionAsNotPlayEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectConditionByPlayingForm model={d!} onChanged={h}></CardEffectConditionByPlayingForm>}
      />
      <InputOption
        label="プレイしたとき以外"
        model={model}
        keyName="byNotPlay"
        empty={CardEffectConditionAsNotPlayEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectConditionAsNotPlayForm model={d!} onChanged={h}></CardEffectConditionAsNotPlayForm>}
      />
      <InputOption
        label="予約されてるとき"
        model={model}
        keyName="reserve"
        empty={CardEffectConditionAsNotPlayEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectConditionAsReserveForm model={d!} onChanged={h}></CardEffectConditionAsReserveForm>}
      />
    </>
  );
};

export default CardEffectConditionForm;
