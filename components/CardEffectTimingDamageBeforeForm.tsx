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
      <InputOption
        label="攻撃カードの条件"
        model={model}
        keyName="sourceCardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
      <InputOption
        label="防御プレイヤーの条件"
        model={model}
        keyName="takePlayerCondition"
        empty={playerConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <PlayerConditionForm model={d!} onChanged={h}></PlayerConditionForm>}
      />
      <InputOption
        label="防御カードの条件"
        model={model}
        keyName="takeCardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardConditionForm model={d!} onChanged={h}></CardConditionForm>}
      />
    </>
  );
};

export default CardEffectTimingDamageBeforeForm;
