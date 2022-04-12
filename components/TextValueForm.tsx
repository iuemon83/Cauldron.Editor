import { choiceEmpty } from "../types/Choice";
import { textValueCalculatorEmpty } from "../types/TextValueCalculator";
import { TextValue } from "../types/TextValue";
import { globalCache } from "./CauldronApi";
import ChoiceForm from "./ChoiceForm";
import { FormControlLabel, Switch, Select, MenuItem, InputLabel } from "@mui/material";
import InputText from "./input/InputText";

interface Props {
  model: TextValue;
  onChanged: (newValue: Partial<TextValue>) => void;
}

const TextValueForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.textValueCalculatorValueTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  const pureValueInput = () => {
    return (
      <>
        <InputText label="値" model={model} keyName="pureValue" onChanged={onChanged} />
      </>
    );
  };

  const dynamicValueInput = () => {
    if (!model.textValueCalculator) {
      return null;
    }
    return (
      <>
        <InputLabel>value</InputLabel>
        <Select
          value={valueTypes.indexOf(model.textValueCalculator.type)}
          onChange={(e) => {
            if (model.textValueCalculator) {
              const newTextCalc = {
                ...model.textValueCalculator,
                type: valueTypes[Number(e.target.value)],
              };
              onChanged({ textValueCalculator: newTextCalc });
            }
          }}
        >
          {valueTypes.map((e, index) => (
            <MenuItem key={index} value={index}>
              {e}
            </MenuItem>
          ))}
        </Select>
        <ChoiceForm
          model={model.textValueCalculator.cardsChoice}
          onChanged={(x) => {
            if (model.textValueCalculator) {
              const newChoice = {
                ...(model.textValueCalculator.cardsChoice ?? choiceEmpty()),
                ...x,
              };
              const newTextCalc = {
                ...model.textValueCalculator,
                cardChoice: newChoice,
              };
              onChanged({ textValueCalculator: newTextCalc });
            }
          }}
        ></ChoiceForm>
      </>
    );
  };

  const valueInput = () => {
    return model.textValueCalculator ? dynamicValueInput() : pureValueInput();
  };

  const handleIsDynamicValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? textValueCalculatorEmpty() : undefined;

    onChanged({ textValueCalculator: newValue });
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={model.textValueCalculator !== undefined} onChange={handleIsDynamicValueChange} />}
        label="動的?"
      />
      <div>{valueInput()}</div>
    </>
  );
};

export default TextValueForm;
