import { cardConditionEmpty } from "../types/CardCondition";
import { CardEffectTimingDamageBeforeEvent } from "../types/CardEffectTimingDamageBeforeEvent";
import { playerConditionEmpty } from "../types/PlayerCondition";
import CardConditionForm from "./CardConditionForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";
import PlayerConditionForm from "./PlayerConditionForm";

interface Props {
  model: CardEffectTimingDamageBeforeEvent;
  onChanged: (newValue: Partial<CardEffectTimingDamageBeforeEvent>) => void;
}

const CardEffectTimingDamageBeforeForm: React.FC<Props> = ({ model, onChanged }) => {
  const damageTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingDamageBeforeDamageTypes.map((v) => [v.code, v.displayText])
  );
  const damageTypes = Object.keys(damageTypesLabelsByValue);

  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingDamageBeforeEventSources.map((v) => [v.code, v.displayText])
  );
  const eventSources = Object.keys(eventSourcesLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="type"
          values={damageTypes}
          model={model}
          keyName={"type"}
          getLabel={(v) => damageTypesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputSelect
          label="source"
          values={eventSources}
          model={model}
          keyName={"source"}
          getLabel={(v) => eventSourcesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <InputOption
        label="プレイヤーの選択条件"
        model={model}
        keyName="playerCondition"
        empty={playerConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <PlayerConditionForm model={d!} onChanged={h}></PlayerConditionForm>}
      />
      <InputOption
        label="カードの選択条件"
        model={model}
        keyName="cardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
    </>
  );
};

export default CardEffectTimingDamageBeforeForm;
