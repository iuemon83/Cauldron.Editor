import React from "react";
import { CardEffectActionAddCardDetail } from "../types/CardEffectActionAddCardDetail";
import { InsertCardPositionEmpty } from "../types/InsertCardPositionDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
import InputNumber from "./input/InputNumber";
import InputOption from "./input/InputOption";
import InsertCardPosition from "./InsertCardPosition";
import ZoneValue from "./ZoneValue";

interface Props {
  detail: CardEffectActionAddCardDetail;
  onChanged: (newValue: Partial<CardEffectActionAddCardDetail>) => void;
}

const CardEffectActionAddCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormSet label="生成先の領域">
        <ZoneValue
          detail={detail.zoneToAddCard}
          onChanged={(x) =>
            onChanged({ zoneToAddCard: { ...detail.zoneToAddCard, ...x } })
          }
        ></ZoneValue>
      </FormSet>
      <InputOption
        label="生成先の位置"
        detail={detail}
        keyName="insertCardPosition"
        empty={InsertCardPositionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <InsertCardPosition detail={d!} onChanged={h}></InsertCardPosition>
        )}
      />
      <FormSet label="生成するカードの選択条件">
        <Choice
          detail={detail.choice}
          onChanged={(x) => onChanged({ choice: { ...detail.choice, ...x } })}
        ></Choice>
      </FormSet>
      <InputNumber
        label="選択したカードを生成する数"
        detail={detail}
        keyName="numOfAddCards"
        onChanged={onChanged}
      />
    </>
  );
};

export default CardEffectActionAddCard;
