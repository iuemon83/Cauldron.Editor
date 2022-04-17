import { CardCondition } from "../types/CardCondition";
import { cardSetConditionEmpty } from "../types/CardSetCondition";
import { cardTypeConditionEmpty } from "../types/CardTypeCondition";
import { numConditionEmpty } from "../types/NumCondition";
import { textConditionEmpty } from "../types/TextCondition";
import { zoneConditionEmpty } from "../types/ZoneCondition";
import CardSetConditionForm from "./CardSetConditionForm";
import CardTypeConditionForm from "./CardTypeConditionForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

import NumConditionForm from "./NumConditionForm";
import TextConditionForm from "./TextConditionForm";
import ZoneConditionForm from "./ZoneConditionForm";
import ActionContextCardsForm from "./ActionContextCardsForm";
import CardAnnotationConditionForm from "./CardAnnotationConditionForm";
import { actionContextCardsEmpty } from "../types/ActionContextCards";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { cardAnnotationConditionEmpty } from "../types/CardAnnotationCondition";

interface Props {
  model: CardCondition;
  onChanged: (model: Partial<CardCondition>) => void;
}

const CardConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const cardConditionContextsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.cardConditionContexts.map((v) => [v.code, v.displayText])
  );
  const cardConditionContexts = Object.keys(cardConditionContextsLabelsByValue);

  const ownerConditionValuesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.ownerConditionValues.map((v) => [v.code, v.displayText])
  );
  const ownerConditionValues = Object.keys(ownerConditionValuesLabelsByValue);

  const cardAbilitiesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardAbilities.map((v) => [v.code, v.displayText]));
  const cardAbilities = Object.keys(cardAbilitiesLabelsByValue);

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (model.abilityCondition === undefined) {
      return;
    }

    if (e.target.checked) {
      const newlist = [...model.abilityCondition, cardAbilities[index]];

      onChanged({ abilityCondition: newlist });
    } else {
      const newlist = model.abilityCondition.filter((x) => x !== cardAbilities[index]);

      onChanged({ abilityCondition: newlist });
    }
  };

  return (
    <>
      <InputSelect
        label="コンテキスト"
        values={cardConditionContexts}
        model={model}
        keyName={"contextCondition"}
        getLabel={(v) => cardConditionContextsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="アクションの結果"
        model={model}
        keyName="actionContext"
        empty={actionContextCardsEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsForm model={d!} onChanged={h} />}
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
        label="領域の条件"
        model={model}
        keyName="zoneCondition"
        empty={zoneConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ZoneConditionForm model={d!} onChanged={h}></ZoneConditionForm>}
      />
      <InputOption
        label="アノテーションの条件"
        model={model}
        keyName="annotationCondition"
        empty={cardAnnotationConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardAnnotationConditionForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="アビリティの条件"
        model={model}
        keyName="abilityCondition"
        empty={() => []}
        onChanged={onChanged}
        jtx={(d, h) => (
          <FormGroup row>
            {cardAbilities.map((e, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox value={index} checked={d!.indexOf(e) !== -1} onChange={handleAbilityChange} />}
                label={cardAbilitiesLabelsByValue[e]}
              />
            ))}
          </FormGroup>
        )}
      />
      <InputSelect
        label="所有者の条件"
        values={ownerConditionValues}
        model={model}
        keyName={"ownerCondition"}
        getLabel={(v) => ownerConditionValuesLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};

export default CardConditionForm;
