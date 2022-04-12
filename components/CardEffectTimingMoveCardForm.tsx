import { CardEffectTimingMoveCardEvent } from "../types/CardEffectTimingMoveCardEvent";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CardEffectTimingMoveCardEvent;
  onChanged: (newValue: Partial<CardEffectTimingMoveCardEvent>) => void;
}

const CardEffectTimingMoveCardForm: React.FC<Props> = ({ model, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingMoveCardEventSources.map((v) => [v.code, v.displayText])
  );
  const eventSources = Object.keys(eventSourcesLabelsByValue);

  const zoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText]));
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        model={model}
        keyName={"source"}
        getLabel={(v) => eventSourcesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputSelect
        label="from"
        values={zoneNames}
        model={model}
        keyName={"from"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputSelect
        label="to"
        values={zoneNames}
        model={model}
        keyName={"to"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectTimingMoveCardForm;
