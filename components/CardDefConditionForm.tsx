import { cardAnnotationConditionEmpty } from "../types/CardAnnotationCondition";
import { CardDefCondition } from "../types/CardDefCondition";
import { cardSetConditionEmpty } from "../types/CardSetCondition";
import { cardTypeConditionEmpty } from "../types/CardTypeCondition";
import { numCompareEmpty } from "../types/NumCompare";
import { textConditionEmpty } from "../types/TextCondition";
import CardAnnotationConditionForm from "./CardAnnotationConditionForm";
import CardSetConditionForm from "./CardSetConditionForm";
import CardTypeConditionForm from "./CardTypeConditionForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";

import NumCompareForm from "./NumCompareForm";
import OutZoneConditionForm from "./OutZoneConditionForm";
import TextConditionForm from "./TextConditionForm";

interface Props {
  model: CardDefCondition;
  onChanged: (model: Partial<CardDefCondition>) => void;
}

const CardDefConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <FormSet label="領域の条件">
        <OutZoneConditionForm
          model={model.outZoneCondition}
          onChanged={(x) => onChanged({ outZoneCondition: { ...model.outZoneCondition, ...x } })}
        />
      </FormSet>
      <InputOption
        label="カードタイプの条件"
        model={model}
        keyName="typeCondition"
        empty={cardTypeConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardTypeConditionForm model={d!} onChanged={h}></CardTypeConditionForm>}
      />
      <InputOption
        label="名前の条件"
        model={model}
        keyName="nameCondition"
        empty={textConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <TextConditionForm model={d!} onChanged={h}></TextConditionForm>}
      />
      <InputOption
        label="タグの条件"
        model={model}
        keyName="annotationCondition"
        empty={cardAnnotationConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardAnnotationConditionForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="カードセットの条件"
        model={model}
        keyName="cardSetCondition"
        empty={cardSetConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardSetConditionForm model={d!} onChanged={h}></CardSetConditionForm>}
      />
      <InputOption
        label="コストの条件"
        model={model}
        keyName="costCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
      <InputOption
        label="パワーの条件"
        model={model}
        keyName="powerCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
      <InputOption
        label="タフネスの条件"
        model={model}
        keyName="toughnessCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
    </>
  );
};

export default CardDefConditionForm;
