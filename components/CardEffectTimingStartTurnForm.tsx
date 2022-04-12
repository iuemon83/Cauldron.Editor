import { CardEffectTimingStartTurnEvent } from "../types/CardEffectTimingStartTurnEvent";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CardEffectTimingStartTurnEvent;
  onChanged: (newValue: Partial<CardEffectTimingStartTurnEvent>) => void;
}

const CardEffectTimingStartTurnForm: React.FC<Props> = ({ model, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingStartTurnEventSources.map((v) => [v.code, v.displayText])
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

export default CardEffectTimingStartTurnForm;
