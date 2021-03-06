import { CardCondition } from "../types/CardCondition";
import { cardSetConditionEmpty } from "../types/CardSetCondition";
import { cardTypeConditionEmpty } from "../types/CardTypeCondition";
import { textConditionEmpty } from "../types/TextCondition";
import { zoneConditionEmpty } from "../types/ZoneCondition";
import CardSetConditionForm from "./CardSetConditionForm";
import CardTypeConditionForm from "./CardTypeConditionForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

import NumCompareForm from "./NumCompareForm";
import TextConditionForm from "./TextConditionForm";
import ZoneConditionForm from "./ZoneConditionForm";
import ActionContextCardsForm from "./ActionContextCardsForm";
import CardAnnotationConditionForm from "./CardAnnotationConditionForm";
import { actionContextCardsEmpty } from "../types/ActionContextCards";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { cardAnnotationConditionEmpty } from "../types/CardAnnotationCondition";
import { numCompareEmpty } from "../types/NumCompare";

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
        label="??????????????????"
        values={cardConditionContexts}
        model={model}
        keyName={"contextCondition"}
        getLabel={(v) => cardConditionContextsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="???????????????"
        model={model}
        keyName="zoneCondition"
        empty={zoneConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ZoneConditionForm model={d!} onChanged={h}></ZoneConditionForm>}
      />
      <InputOption
        label="???????????????????????????"
        model={model}
        keyName="typeCondition"
        empty={cardTypeConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardTypeConditionForm model={d!} onChanged={h}></CardTypeConditionForm>}
      />
      <InputOption
        label="???????????????"
        model={model}
        keyName="nameCondition"
        empty={textConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <TextConditionForm model={d!} onChanged={h}></TextConditionForm>}
      />
      <InputOption
        label="???????????????"
        model={model}
        keyName="annotationCondition"
        empty={cardAnnotationConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardAnnotationConditionForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="????????????????????????"
        model={model}
        keyName="actionContext"
        empty={actionContextCardsEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="???????????????????????????"
        model={model}
        keyName="cardSetCondition"
        empty={cardSetConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardSetConditionForm model={d!} onChanged={h}></CardSetConditionForm>}
      />
      <InputOption
        label="??????????????????"
        model={model}
        keyName="costCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
      <InputOption
        label="??????????????????"
        model={model}
        keyName="powerCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
      <InputOption
        label="?????????????????????"
        model={model}
        keyName="toughnessCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
      <InputOption
        label="?????????????????????????????????"
        model={model}
        keyName="diffToughnessCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h}></NumCompareForm>}
      />
      <InputOption
        label="????????????????????????"
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
        label="??????????????????"
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
