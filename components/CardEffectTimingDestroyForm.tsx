import { CardEffectTimingDestroyEvent } from "../types/CardEffectTimingDestroyEvent";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CardEffectTimingDestroyEvent;
  onChanged: (newValue: Partial<CardEffectTimingDestroyEvent>) => void;
}

const CardEffectTimingDestroyForm: React.FC<Props> = ({ model, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingDestroyEventSources.map((v) => [v.code, v.displayText])
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

export default CardEffectTimingDestroyForm;
