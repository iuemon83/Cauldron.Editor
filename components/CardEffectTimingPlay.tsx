import React from "react";
import { cardConditionEmpty } from "../types/CardConditionDetail";
import { CardEffectTimingPlayEventDetail } from "../types/CardEffectTimingPlayEventDetail";
import CardCondition from "./CardCondition";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: CardEffectTimingPlayEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingPlayEventDetail>) => void;
}

const CardEffectTimingPlay: React.FC<Props> = ({ detail, onChanged }) => {
  const eventSourcesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.effectTimingPlayEventSources.map((v) => [
      v.code,
      v.displayText,
    ])
  );
  const eventSources = Object.keys(eventSourcesLabelsByValue);

  return (
    <>
      <InputSelect
        label="source"
        values={eventSources}
        detail={detail}
        keyName={"source"}
        getLabel={(v) => eventSourcesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="カードの選択条件"
        detail={detail}
        keyName="cardCondition"
        empty={cardConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardCondition detail={d!} onChanged={h}></CardCondition>
        )}
      />
    </>
  );
};

export default CardEffectTimingPlay;
