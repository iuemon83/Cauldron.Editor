import { cardConditionEmpty } from "../types/CardCondition";
import { CardEffectTimingAttackBeforeEvent } from "../types/CardEffectTimingAttackBeforeEvent";
import CardConditionForm from "./CardConditionForm";
import InputOption from "./input/InputOption";

interface Props {
  model: CardEffectTimingAttackBeforeEvent;
  onChanged: (newValue: Partial<CardEffectTimingAttackBeforeEvent>) => void;
}

const CardEffectTimingAttackBeforeForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="攻撃カードの条件"
        model={model}
        keyName="attackCardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
      <InputOption
        label="防御カードの条件"
        model={model}
        keyName="guardCardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
    </>
  );
};

export default CardEffectTimingAttackBeforeForm;
