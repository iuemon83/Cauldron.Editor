import { textValueCalculatorEmpty } from "../types/TextValueCalculator";
import { TextValue } from "../types/TextValue";
import InputText from "./input/InputText";
import TextValueCalculatorForm from "./TextValueCalculatorForm";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface Props {
  model: TextValue;
  onChanged: (newValue: Partial<TextValue>) => void;
}

type ActionNameKey = "pureValue" | "textValueCalculator";
type ActionKeyMap = { [key in ActionNameKey]: string };

const actionNames: ActionKeyMap = {
  pureValue: "定数",
  textValueCalculator: "算出",
} as const;

const actionNameKeys = Object.keys(actionNames) as ActionNameKey[];

function isActionNameKey(x: string): x is ActionNameKey {
  return (actionNameKeys as readonly string[]).indexOf(x) >= 0;
}

const TextValueForm: React.FC<Props> = ({ model, onChanged }) => {
  const selectedAction = (() => {
    for (const key of actionNameKeys) {
      if (model[key] !== undefined) {
        console.log(key);
        return key;
      }
    }

    return "";
  })();

  const handleActionNameChanged = (e: SelectChangeEvent<string>) => {
    const newSelectedActionName = e.target.value;

    if (!isActionNameKey(newSelectedActionName)) {
      return;
    }

    actionNameKeys.forEach((x) => {
      if (x !== newSelectedActionName) {
        model[x] = undefined;
      }
    });

    switch (newSelectedActionName) {
      case "pureValue":
        model.pureValue = "";
        break;
      case "textValueCalculator":
        model.textValueCalculator = textValueCalculatorEmpty();
        break;
    }

    onChanged(model);
  };

  return (
    <>
      <FormControl>
        <InputLabel>テキストの種類</InputLabel>
        <Select value={selectedAction} onChange={handleActionNameChanged}>
          {actionNameKeys.map((key, index) => (
            <MenuItem key={index} value={key}>
              {actionNames[key as keyof typeof actionNames]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedAction === "pureValue" && model.pureValue !== undefined && (
        <InputText label="" model={model} keyName="pureValue" onChanged={onChanged} />
      )}
      {selectedAction === "textValueCalculator" && model.textValueCalculator !== undefined && (
        <TextValueCalculatorForm
          model={model.textValueCalculator}
          onChanged={(x) =>
            model.textValueCalculator !== undefined && onChanged({ textValueCalculator: { ...model.textValueCalculator, ...x } })
          }
        />
      )}
    </>
  );
};

export default TextValueForm;
