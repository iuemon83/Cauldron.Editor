import { CardEffectTimingModifyCounterOnCardEvent } from "../types/CardEffectTimingModifyCounterOnCardEvent";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import OrCardConditionListForm from "./OrCardConditionListForm";

interface Props {
  model: CardEffectTimingModifyCounterOnCardEvent;
  onChanged: (newValue: Partial<CardEffectTimingModifyCounterOnCardEvent>) => void;
}

const CardEffectTimingModifyCounterOnCardForm: React.FC<Props> = ({ model, onChanged }) => {
  const operatorsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingModifyCounterOnCardEventOperators.map((v) => [v.code, v.displayText])
  );
  const operators = Object.keys(operatorsLabelsByValue);

  return (
    <>
      <OrCardConditionListForm model={model} onChanged={onChanged} />
      <InputSelect
        label="from"
        values={operators}
        model={model}
        keyName={"operator"}
        getLabel={(v) => operatorsLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingModifyCounterOnCardForm;
