import React from "react";
import { CardEffectActionAddCard } from "../types/CardEffectActionAddCard";
import { InsertCardPositionEmpty } from "../types/InsertCardPosition";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
import InputTextOption from "./input/InputTextOption";
import InsertCardPositionForm from "./InsertCardPositionForm";
import NumValueForm from "./NumValueForm";
import ZoneValueForm from "./ZoneValueForm";

interface Props {
  model: CardEffectActionAddCard;
  onChanged: (newValue: Partial<CardEffectActionAddCard>) => void;
}

const CardEffectActionAddCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="生成する場所">
        <ZoneValueForm
          model={model.zoneToAddCard}
          onChanged={(x) => onChanged({ zoneToAddCard: { ...model.zoneToAddCard, ...x } })}
        ></ZoneValueForm>
      </FormSet>
      <InputOption
        label="生成する位置"
        model={model}
        keyName="insertCardPosition"
        empty={InsertCardPositionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <InsertCardPositionForm model={d!} onChanged={h}></InsertCardPositionForm>}
      />
      <FormSet label="生成するカードの選択条件">
        <ChoiceForm model={model.choice} onChanged={(x) => onChanged({ choice: { ...model.choice, ...x } })}></ChoiceForm>
      </FormSet>
      <FormSet label="選択したカードを生成する数">
        <NumValueForm
          model={model.numOfAddCards}
          onChanged={(x) => onChanged({ numOfAddCards: { ...model.numOfAddCards, ...x } })}
        />
      </FormSet>
    </>
  );
};

export default CardEffectActionAddCardForm;
