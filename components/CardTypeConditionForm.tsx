import { CardTypeCondition } from "../types/CardTypeCondition";
import { globalCache } from "./CauldronApi";
import { FormControlLabel, Checkbox, Switch } from "@mui/material";

interface Props {
  model: CardTypeCondition;
  onChanged: (model: Partial<CardTypeCondition>) => void;
}

const CardTypeConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const cardTypesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardTypes.map((v) => [v.code, v.displayText]));
  const cardTypes = Object.keys(cardTypesLabelsByValue);

  const handleCardTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...model.value, cardTypes[index]];

      onChanged({ value: newlist });
    } else {
      const newlist = model.value.filter((x) => x !== cardTypes[index]);

      onChanged({ value: newlist });
    }
  };

  return (
    <>
      <div>
        カードタイプ:
        {cardTypes.map((e, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox value={index} checked={model.value.indexOf(e) !== -1} onChange={handleCardTypeChange} />}
            label={cardTypesLabelsByValue[e]}
          />
        ))}
      </div>
      <div>
        <FormControlLabel
          control={<Switch checked={model.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
    </>
  );
};

export default CardTypeConditionForm;
