import { CardEffectTimingExcludeCardEvent } from "../types/CardEffectTimingExcludeCardEvent";
import { zoneConditionEmpty } from "../types/ZoneCondition";
import InputOption from "./input/InputOption";
import OrCardConditionListForm from "./OrCardConditionListForm";
import ZoneConditionForm from "./ZoneConditionForm";

interface Props {
  model: CardEffectTimingExcludeCardEvent;
  onChanged: (newValue: Partial<CardEffectTimingExcludeCardEvent>) => void;
}

const CardEffectTimingExcludeCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <OrCardConditionListForm model={model} onChanged={onChanged} />

      <InputOption
        label="領域の条件"
        model={model}
        keyName="fromZoneCondition"
        empty={zoneConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ZoneConditionForm model={d!} onChanged={h} />}
      />
    </>
  );
};

export default CardEffectTimingExcludeCardForm;
