import React from "react";
import { CardEffectActionAddCard } from "../types/CardEffectActionAddCard";
import { InsertCardPositionEmpty } from "../types/InsertCardPosition";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputNumber from "./input/InputNumber";
import InputOption from "./input/InputOption";
import InsertCardPositionForm from "./InsertCardPositionForm";
import ZoneValueForm from "./ZoneValueForm";

interface Props {
  model: CardEffectActionAddCard;
  onChanged: (newValue: Partial<CardEffectActionAddCard>) => void;
}

const CardEffectActionAddCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <FormSet label="生成先の領域">
        <ZoneValueForm
          model={model.zoneToAddCard}
          onChanged={(x) => onChanged({ zoneToAddCard: { ...model.zoneToAddCard, ...x } })}
        ></ZoneValueForm>
      </FormSet>
      <InputOption
        label="生成先の位置"
        model={model}
        keyName="insertCardPosition"
        empty={InsertCardPositionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <InsertCardPositionForm model={d!} onChanged={h}></InsertCardPositionForm>}
      />
      <FormSet label="生成するカードの選択条件">
        <ChoiceForm model={model.choice} onChanged={(x) => onChanged({ choice: { ...model.choice, ...x } })}></ChoiceForm>
      </FormSet>
      <InputNumber label="選択したカードを生成する数" model={model} keyName="numOfAddCards" onChanged={onChanged} />
    </>
  );
};

export default CardEffectActionAddCardForm;
