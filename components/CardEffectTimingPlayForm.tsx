import React from "react";
import { CardEffectTimingPlayEvent } from "../types/CardEffectTimingPlayEvent";
import OrCardConditionListForm from "./OrCardConditionListForm";

interface Props {
  model: CardEffectTimingPlayEvent;
  onChanged: (newValue: Partial<CardEffectTimingPlayEvent>) => void;
}

const CardEffectTimingPlayForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <OrCardConditionListForm model={model} onChanged={onChanged} />
    </>
  );
};

export default CardEffectTimingPlayForm;
