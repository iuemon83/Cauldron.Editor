import { cardConditionEmpty } from "../types/CardCondition";
import { CardEffectTimingHealBeforeEvent } from "../types/CardEffectTimingHealBeforeEvent";
import { playerConditionEmpty } from "../types/PlayerCondition";
import CardConditionForm from "./CardConditionForm";
import InputOption from "./input/InputOption";
import PlayerConditionForm from "./PlayerConditionForm";

interface Props {
  model: CardEffectTimingHealBeforeEvent;
  onChanged: (newValue: Partial<CardEffectTimingHealBeforeEvent>) => void;
}

const CardEffectTimingHealBeforeForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="回復元のカードの条件"
        model={model}
        keyName="sourceCardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
      <InputOption
        label="回復されるプレイヤーの条件"
        model={model}
        keyName="takePlayerCondition"
        empty={playerConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <PlayerConditionForm model={d!} onChanged={h}></PlayerConditionForm>}
      />
      <InputOption
        label="回復されるカードの条件"
        model={model}
        keyName="takeCardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
    </>
  );
};

export default CardEffectTimingHealBeforeForm;
