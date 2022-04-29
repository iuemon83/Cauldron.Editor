import { cardAnnotationConditionEmpty } from "../types/CardAnnotationCondition";
import { CardDefCondition } from "../types/CardDefCondition";
import { cardSetConditionEmpty } from "../types/CardSetCondition";
import { cardTypeConditionEmpty } from "../types/CardTypeCondition";
import { numConditionEmpty } from "../types/NumCondition";
import { textConditionEmpty } from "../types/TextCondition";
import CardAnnotationConditionForm from "./CardAnnotationConditionForm";
import CardSetConditionForm from "./CardSetConditionForm";
import CardTypeConditionForm from "./CardTypeConditionForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";

import NumConditionForm from "./NumConditionForm";
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
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumConditionForm model={d!} onChanged={h}></NumConditionForm>}
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
        label="パワーの条件"
        model={model}
        keyName="powerCondition"
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumConditionForm model={d!} onChanged={h}></NumConditionForm>}
      />
      <InputOption
        label="タフネスの条件"
        model={model}
        keyName="toughnessCondition"
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumConditionForm model={d!} onChanged={h}></NumConditionForm>}
      />
      <InputOption
        label="カードタイプの条件"
        model={model}
        keyName="typeCondition"
        empty={cardTypeConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardTypeConditionForm model={d!} onChanged={h}></CardTypeConditionForm>}
      />
      <InputOption
        label="タグの条件"
        model={model}
        keyName="annotationCondition"
        empty={cardAnnotationConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardAnnotationConditionForm model={d!} onChanged={h} />}
      />
    </>
  );
};

export default CardDefConditionForm;
