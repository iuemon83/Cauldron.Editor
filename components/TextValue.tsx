import { choiceEmpty } from "../types/ChoiceDetail";
import { textValueCalculatorEmpty } from "../types/TextValueCalculatorDetail";
import { TextValueDetail } from "../types/TextValueDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";
import { FormControlLabel, Switch, Select, MenuItem, InputLabel } from "@mui/material";
import InputText from "./input/InputText";

interface Props {
  detail: TextValueDetail;
  onChanged: (detail: Partial<TextValueDetail>) => void;
}

const TextValue: React.FC<Props> = ({ detail, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.textValueCalculatorValueTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  const pureValueInput = () => {
    return (
      <>
        <InputText label="値" detail={detail} keyName="pureValue" onChanged={onChanged} />
      </>
    );
  };

  const dynamicValueInput = () => {
    if (!detail.textValueCalculator) {
      return null;
    }
    return (
      <>
        <InputLabel>value</InputLabel>
        <Select
          value={valueTypes.indexOf(detail.textValueCalculator.type)}
          onChange={(e) => {
            if (detail.textValueCalculator) {
              const newTextCalc = {
                ...detail.textValueCalculator,
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
        <Choice
          detail={detail.textValueCalculator.cardsChoice}
          onChanged={(x) => {
            if (detail.textValueCalculator) {
              const newChoice = {
                ...(detail.textValueCalculator.cardsChoice ?? choiceEmpty()),
                ...x,
              };
              const newTextCalc = {
                ...detail.textValueCalculator,
                cardChoice: newChoice,
              };
              onChanged({ textValueCalculator: newTextCalc });
            }
          }}
        ></Choice>
      </>
    );
  };

  const valueInput = () => {
    return detail.textValueCalculator ? dynamicValueInput() : pureValueInput();
  };

  const handleIsDynamicValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? textValueCalculatorEmpty() : undefined;

    onChanged({ textValueCalculator: newValue });
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={detail.textValueCalculator !== undefined} onChange={handleIsDynamicValueChange} />}
        label="動的?"
      />
      <div>{valueInput()}</div>
    </>
  );
};

export default TextValue;
