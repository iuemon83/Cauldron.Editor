import React from "react";
import { cardEffectEmpty } from "../types/CardEffect";
import { CardEffectActionReserveEffect } from "../types/CardEffectActionReserveEffect";
import CardEffectForm from "./CardEffectForm";
import InputList from "./input/InputList";

interface Props {
  model: CardEffectActionReserveEffect;
  onChanged: (newValue: Partial<CardEffectActionReserveEffect>) => void;
}

const CardEffectActionReserveEffectForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputList
        label="効果"
        model={model}
        keyName="effectsToReserve"
        newItem={cardEffectEmpty}
        onChanged={onChanged}
        jtx={(item, onItemChanged) => <CardEffectForm model={item} onChanged={onItemChanged} />}
      />
    </>
  );
};

export default CardEffectActionReserveEffectForm;
