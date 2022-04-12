import { globalCache } from "./CauldronApi";
import { CardSetCondition } from "../types/CardSetCondition";
import InputSelect from "./input/InputSelect";
import InputOption from "./input/InputOption";
import { textConditionEmpty } from "../types/TextCondition";
import TextConditionForm from "./TextConditionForm";

interface Props {
  model: CardSetCondition;
  onChanged: (model: Partial<CardSetCondition>) => void;
}

const CardSetConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const cardSetConditionTypeLabelsByValue = Object.fromEntries(
    globalCache.metadata!.cardSetConditionTypes.map((v) => [v.code, v.displayText])
  );
  const cardSetConditionTypes = Object.keys(cardSetConditionTypeLabelsByValue);

  return (
    <>
      カードセット:
      <InputSelect
        label="タイプ"
        values={cardSetConditionTypes}
        model={model}
        keyName={"type"}
        getLabel={(v) => cardSetConditionTypeLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="カードセット名"
        model={model}
        keyName="valueCondition"
        empty={textConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <TextConditionForm model={d!} onChanged={h}></TextConditionForm>}
      />
    </>
  );
};

export default CardSetConditionForm;
