import React from "react";
import { CardEffectActionMoveCard } from "../types/CardEffectActionMoveCard";
import { InsertCardPositionEmpty } from "../types/InsertCardPosition";
import { globalCache } from "./CauldronApi";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";
import InputTextOption from "./input/InputTextOption";
import InsertCardPositionForm from "./InsertCardPositionForm";

interface Props {
  model: CardEffectActionMoveCard;
  onChanged: (newValue: Partial<CardEffectActionMoveCard>) => void;
}

const CardEffectActionMoveCardForm: React.FC<Props> = ({ model, onChanged }) => {
  console.log(model);

  const zoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText]));
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <InputSelect
        label="移動先"
        values={zoneNames}
        model={model}
        keyName={"to"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="移動先の位置"
        model={model}
        keyName="insertCardPosition"
        empty={InsertCardPositionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <InsertCardPositionForm model={d!} onChanged={h}></InsertCardPositionForm>}
      />
      <FormSet label="移動するカードの選択条件">
        <ChoiceForm
          model={model.cardsChoice}
          onChanged={(x) =>
            onChanged({
              cardsChoice: { ...model.cardsChoice, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionMoveCardForm;
