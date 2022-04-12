import React from "react";
import { cardConditionEmpty } from "../types/CardCondition";
import { CardEffectTimingPlayEvent } from "../types/CardEffectTimingPlayEvent";
import CardConditionForm from "./CardConditionForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CardEffectTimingPlayEvent;
  onChanged: (newValue: Partial<CardEffectTimingPlayEvent>) => void;
}

const CardEffectTimingPlayForm: React.FC<Props> = ({ model, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingPlayEventSources.map((v) => [v.code, v.displayText])
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

export default CardEffectTimingPlayForm;
