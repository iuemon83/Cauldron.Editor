import { CardEffectTimingMoveCardEvent } from "../types/CardEffectTimingMoveCardEvent";
import { zoneConditionEmpty } from "../types/ZoneCondition";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";
import OrCardConditionListForm from "./OrCardConditionListForm";
import ZoneConditionForm from "./ZoneConditionForm";

interface Props {
  model: CardEffectTimingMoveCardEvent;
  onChanged: (newValue: Partial<CardEffectTimingMoveCardEvent>) => void;
}

const CardEffectTimingMoveCardForm: React.FC<Props> = ({ model, onChanged }) => {
  const zoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText]));
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  return (
    <>
      <OrCardConditionListForm model={model} onChanged={onChanged} />
      <InputOption
        label="移動前"
        model={model}
        keyName="from"
        empty={zoneConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ZoneConditionForm model={d!} onChanged={h}></ZoneConditionForm>}
      />
      <InputOption
        label="移動後"
        model={model}
        keyName="to"
        empty={zoneConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ZoneConditionForm model={d!} onChanged={h}></ZoneConditionForm>}
      />
    </>
  );
};

export default CardEffectTimingMoveCardForm;
