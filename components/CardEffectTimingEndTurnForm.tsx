import { CardEffectTimingEndTurnEvent } from "../types/CardEffectTimingEndTurnEvent";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CardEffectTimingEndTurnEvent;
  onChanged: (newValue: Partial<CardEffectTimingEndTurnEvent>) => void;
}

const CardEffectTimingEndTurnForm: React.FC<Props> = ({ model, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingEndTurnEventSources.map((v) => [v.code, v.displayText])
  );
  const eventSources = Object.keys(eventSourcesLabelsByValue);

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
    </>
  );
};

export default CardEffectTimingEndTurnForm;
