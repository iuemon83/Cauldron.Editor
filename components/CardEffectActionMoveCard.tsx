import React from "react";
import { CardEffectActionMoveCardDetail } from "../types/CardEffectActionMoveCardDetail";
import { InsertCardPositionEmpty } from "../types/InsertCardPositionDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";
import InsertCardPosition from "./InsertCardPosition";

interface Props {
  detail: CardEffectActionMoveCardDetail;
  onChanged: (newValue: Partial<CardEffectActionMoveCardDetail>) => void;
}

const CardEffectActionMoveCard: React.FC<Props> = ({ detail, onChanged }) => {
  const zoneNamesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText])
  );
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  return (
    <>
      <InputSelect
        label="移動先"
        values={zoneNames}
        detail={detail}
        keyName={"to"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="移動先の位置"
        detail={detail}
        keyName="insertCardPosition"
        empty={InsertCardPositionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <InsertCardPosition detail={d!} onChanged={h}></InsertCardPosition>
        )}
      />
      <FormSet label="移動するカードの選択条件">
        <Choice
          detail={detail.cardsChoice}
          onChanged={(x) =>
            onChanged({
              cardsChoice: { ...detail.cardsChoice, ...x },
            })
          }
        ></Choice>
      </FormSet>
    </>
  );
};

export default CardEffectActionMoveCard;
